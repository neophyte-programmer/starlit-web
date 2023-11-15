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
import { Textarea } from "@/components/ui/textarea"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useStateValue } from "@/context/StateProvider"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { Enquiry } from "@/types"
import { CREATE_ENQUIRY } from "@/utils/server/enquiry"


const formSchema = z.object({
    fullname: z.string().min(1, "Enter your full name"),
    email: z.string().email("Please enter a valid email").min(1, "Enter an email"),
    mobile: z.string().min(1, "Enter your phone number"),
    title: z.string().min(1, "Enter a title"),
    message: z.string().min(8, "Message should be more than 7 characters")
})

export default function SendEnquiryForm() {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: "",
            email: "",
            mobile: "",
            title: "",
            message: ""
        },
    })

    const createEnquiry = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            return CREATE_ENQUIRY(values)
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['enquiries'], (oldData: Enquiry[]) => {
                return oldData ? [
                    ...oldData,
                    data
                ] : oldData
            })
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const toastSubmitId = toast.loading("Creating enquiry ...")

        createEnquiry.mutate(values, {
            onSuccess: (data) => {
                toast.success(`Created enquiry successfully`, {
                    id: toastSubmitId
                })
            },
            onError: (error: any) => {
                toast.error(error?.response?.data || "Couldn't create enquiry. Try again later", {
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
                    name="fullname"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createEnquiry.isPending} placeholder="Full Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createEnquiry.isPending} placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createEnquiry.isPending} placeholder="Phone Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createEnquiry.isPending} placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    disabled={createEnquiry.isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  " placeholder="Description" {...field} />

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={createEnquiry.isPending} className=" w-full" type="submit">
                    {createEnquiry.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                    Submit
                </Button>
            </form>
        </Form>
    )
}