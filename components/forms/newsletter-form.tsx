"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { SUBSCRIBE } from "@/utils/server/newsletter"

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email"
    }).min(10, {
        message: "Please enter more than 10 characters"
    }),
})


export default function NewsletterForm() {
    const queryClient = useQueryClient()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    const subscribeToNewsletter = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            return SUBSCRIBE(values.email)
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
            const toastSubmitId = toast.loading("Subscribing ...")
    
            subscribeToNewsletter.mutate(values, {
                onSuccess: (data) => {
                    toast.success(`Subscribed`, {
                        id: toastSubmitId
                    })
                },
                onError: (error: any) => {
                    toast.error(error?.response?.data || "Couldn't subscribe. Try again later", {
                        id: toastSubmitId
                    })
                    console.log(error);
    
                }
    
            })
    
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4 md:p-8">
                <h1 className="text-3xl font-medium">Subscribe to our newsletter</h1>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  " placeholder="example@mail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className="md:w-max w-full" variant="pink" type="submit">Submit</Button>
            </form>
        </Form>
    )
}