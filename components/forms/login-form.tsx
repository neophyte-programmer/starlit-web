"use client"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useMutation } from "@tanstack/react-query"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LOGIN_USER } from "@/utils/server/auth"
import toast from "react-hot-toast"
import { Loader2 } from "lucide-react"
import { useStateValue } from "@/context/StateProvider"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import { useState } from "react"

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email"
    }).min(10, {
        message: "Please enter more than 10 characters"
    }),
    password: z.string().min(8, "Password should be more than 7 characters")
})



export default function LoginForm({ type }: { type: "founder" | "executive" }) {
    const [{ user }, dispatch] = useStateValue()
    const [viewPassword, setViewPassword] = useState(false)

    const toggleViewPassword = () => {
        setViewPassword((prev) => !prev)
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const loginUser = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            const info = {
                email: values.email,
                password: values.password,
                schema: type
            }
            // console.log(info);

            return LOGIN_USER(info)
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const toastSubmitId = toast.loading("Logging in")

        loginUser.mutate(values, {
            onSuccess: (data) => {
                console.log(data);

                toast.success(`Login Successful`, {
                    id: toastSubmitId
                })

                dispatch({
                    type: "SET_USER",
                    payload: data
                })

                if (typeof window !== "undefined") {
                    localStorage.setItem("user", JSON.stringify(data))
                    localStorage.setItem("role", JSON.stringify(type))
                    location.reload()
                }
            },
            onError: (error: any) => {
                toast.error(error?.response?.data || "Couldn't log you in", {
                    id: toastSubmitId
                })
                console.log(error);

            }

        })

    }

    return (
        <main className="w-screen bg-black/5 h-screen overflow-hidden flex flex-col gap-4 items-center justify-center">

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg w-full space-y-4 bg-white shadow-md rounded-lg p-4 sm:p-8">
                    <div className="flex flex-col gap-2 text-sm text-center">
                        <h1 className="text-3xl text-center font-medium">Login.</h1>
                        <p className="text-neutral-500">
                            Starlit {type === "founder" ? "Founder" : "Executive"} Dashboard
                        </p>
                    </div>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={loginUser.isPending} placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        disabled={loginUser.isPending}
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <div className="flex relative ">
                                        <Input type={viewPassword ? "text" : "password"} className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  " placeholder="Password" {...field} />
                                        <button onClick={toggleViewPassword} type="button" className="absolute right-0 rounded-lg  bg-neutral-200 flex items-center justify-center h-full aspect-square ">
                                            {
                                                viewPassword ? <BsEyeSlash /> : <BsEye />
                                            }
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={loginUser.isPending} className=" w-full" variant="pink" type="submit">
                        {loginUser.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                        Submit
                    </Button>
                </form>
            </Form>

        </main>
    )
}