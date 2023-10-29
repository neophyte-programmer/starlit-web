"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useStateValue } from "@/context/StateProvider"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast"
import { CREATE_NEWSLETTER } from "@/utils/server/newsletter"
import { Button } from "../ui/button"
import Tiptap from "../tiptap"

const formSchema = z.object({
    title: z.string().min(1, "Enter a title"),
    letter: z.string().min(8, "Letter message should be more than 7 characters")
})

export default function CreateNewsletterForm() {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            title: "",
            letter: ""
        }
    })

    const createNewsletter = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (!user.token) {
                throw new Error("Please login again")
            }

            return CREATE_NEWSLETTER(values, user.token)
        },

    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const toastSubmitId = toast.loading("Creating position ...")

        createNewsletter.mutate(values, {
            onSuccess: (data) => {
                toast.success(`Created position successfully`, {
                    id: toastSubmitId
                })


            },
            onError: (error: any) => {
                toast.error(error?.response?.data || "Couldn't create position. Try again later", {
                    id: toastSubmitId
                })
                console.log(error);

            }

        })

    }

    return (
        <Form {...form}>
            <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)} >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createNewsletter.isPending} placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="letter"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Newsletter Message</FormLabel>
                            <FormControl>
                               <Tiptap letter={field.value} onChange={field.onChange} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex w-full mt-4">
                    <Button type="submit" className="ml-auto">
                        Send Newsletter
                    </Button>
                </div>
            </form>
        </Form>
    )
}