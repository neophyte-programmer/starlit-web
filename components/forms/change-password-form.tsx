"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useStateValue } from "@/context/StateProvider"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { LOGOUT_USER } from "@/utils/server/auth"
import { CHANGE_FOUNDER_PASSWORD } from "@/utils/server/founder"
import { CHANGE_EXECUTIVE_PASSWORD } from "@/utils/server/executive"

const formSchema = z.object({
    oldPassword: z.string().min(6, "Old password should be more than 6 characters"),
    newPassword: z.string().min(6, "New password should be more than 6 characters")
})


export default function ChangePasswordForm({ type }: { type: "founder" | "executive" }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()


    const logoutUser = useMutation({
        mutationFn: () => {
            return LOGOUT_USER(type)
        }
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: ""
        },
    })

    const onLogout = () => {
        const logoutToastId = toast.loading("Logging out")

        logoutUser.mutate(undefined, {
            onSuccess: (data) => {
                console.log(data);

                toast.success(`Logout Successful`, {
                    id: logoutToastId
                })

                dispatch({
                    type: "SET_USER",
                    payload: null
                })

                if (typeof window !== "undefined") {
                    localStorage.clear()
                }
            },
            onError: (error: any) => {
                toast.error(error?.message || "Couldn't log you out", {
                    id: logoutToastId
                })
                console.log(error);

            }
        })

    }


    const changePassword = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (!user.token || !user._id) {
                throw new Error("Please login again")
            }

            if (type === "executive") {
                return CHANGE_EXECUTIVE_PASSWORD(user._id, values, user.token)
            } else if (type === "founder") {

                return CHANGE_FOUNDER_PASSWORD(user._id, values, user.token)
            } else {
                throw new Error("Please login and try again")
            }
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const toastSubmitId = toast.loading("Changing password ...")

        changePassword.mutate(values, {
            onSuccess: (data) => {
                toast.success(`Changed password successfully`, {
                    id: toastSubmitId
                })

                onLogout()

            },
            onError: (error: any) => {
                toast.error(error?.message || "Couldn't change password. Try again later", {
                    id: toastSubmitId
                })
                console.log(error);

            }

        })

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4" >
                <FormField
                    control={form.control}
                    name="oldPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="password" className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={changePassword.isPending || logoutUser.isPending} placeholder="Old Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="newPassword"
                    disabled={changePassword.isPending || logoutUser.isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input type="password" className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  " placeholder="New Password" {...field} />

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={changePassword.isPending || logoutUser.isPending} className=" w-full" type="submit">
                    {changePassword.isPending || logoutUser.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                    Change
                </Button>
            </form>
        </Form>
    )
}