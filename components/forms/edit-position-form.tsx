"use client"
import { useStateValue } from "@/context/StateProvider"
import { useMutation, useQueryClient } from "@tanstack/react-query"
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
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { Position } from "@/types"
import { EDIT_POSITION } from "@/utils/server/positions"
import { DialogClose } from "../ui/dialog"

const formSchema = z.object({
    title: z.string().min(1, "Enter a title"),
    description: z.string().min(8, "Description should be more than 7 characters")
})

export default function EditPositionForm({data}: {data: Position}) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: data.title,
            description: data.description
        },
    })

    const editPosition = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (!user.token) {
                throw new Error("Please login again")
            }

            return EDIT_POSITION(data._id, values, user.token)
        },
        onSuccess: (edited) => {
            queryClient.setQueryData(['positions'], (oldData: Position[]) => {
                
                const removeOldPosition = oldData ? oldData.filter((item) => item._id !== data._id) : oldData

                return removeOldPosition ? [ ...removeOldPosition, edited] : removeOldPosition
            })
            toast.success("Position Updated")
        }, 
        onError: (error: any) => {
            toast.error("Something went wrong. Try again")
        }

    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        // const toastSubmitId = toast.loading("Creating position ...")
        editPosition.mutate(values)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4" >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={editPosition.isPending} placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    disabled={editPosition.isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  " placeholder="Description" {...field} />

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <DialogClose asChild>

                <Button disabled={editPosition.isPending} className=" w-full" type="submit">
                    {editPosition.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                    Submit
                </Button>
                </DialogClose>
            </form>
        </Form>
    )
}