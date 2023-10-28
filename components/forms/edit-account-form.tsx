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
import { UPDATE_FOUNDER } from "@/utils/server/founder"

const phoneRegex = /^(\+\d{1,3}[-.\s]?)?(\d{1,4}[-.\s]?)(\d{1,4}[-.\s]?)(\d{1,9})$/

const formSchema = z.object({
    firstname: z.string().min(3, "First name should be more than 3 characters"),
    lastname: z.string().min(3, "Last name should be more than 3 characters"),
    mobile: z.string().min(1, "Enter a phone number").refine((value) => phoneRegex.test(value), "Please enter a valid phone number"),
})

export default function EditAccountForm({ type }: { type: "founder" | "executive" }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: user.firstname || "",
            lastname: user.lastname || "",
            mobile: user.mobile || "",
        },
    })

    const updateUser = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (!user.token || !user._id) {
                throw new Error("Please login again")
            }

            if (type === "executive") {
                throw new Error("feature not available")
            } else if (type === "founder") {

                return UPDATE_FOUNDER(user._id, values, user.token)
            } else {
                throw new Error("Please login and try again")
            }

        },
        onSuccess: (data) => {

        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const toastSubmitId = toast.loading("Updating your profile ...")

        updateUser.mutate(values, {
            onSuccess: (data) => {
                toast.success(`Changed password successfully`, {
                    id: toastSubmitId
                })

                dispatch({
                    type: "SET_USER",
                    payload: data.data
                })

                if (typeof window !== "undefined") {
                    localStorage.setItem("user", JSON.stringify(data.data))
                    localStorage.setItem("role", JSON.stringify(type))
                }

            },
            onError: (error: any) => {
                toast.error(error?.message || "Couldn't update your profile. Try again later", {
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
                    name="firstname"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex flex-col gap-1">
                                    <Label htmlFor="firstname">First Name</Label>
                                    <Input type="text" className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={updateUser.isPending} placeholder="First name" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    disabled={updateUser.isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <div className="flex flex-col gap-1">
                                    <Label htmlFor="firstname">Last Name</Label>
                                    <Input type="text" className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={updateUser.isPending} placeholder="Last name" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mobile"
                    disabled={updateUser.isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                            <div className="flex flex-col gap-1">
                                    <Label htmlFor="firstname">Phone Number</Label>
                                    <Input inputMode="numeric" type="text" className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={updateUser.isPending} placeholder="Phone Number" {...field} />
                                </div>

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={updateUser.isPending} className=" w-full" type="submit">
                    {updateUser.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                    Save Changes
                </Button>
            </form>
        </Form>
    )
}