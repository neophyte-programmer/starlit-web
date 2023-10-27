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
import { ADD_POSITION } from "@/utils/server/positions"
import toast from "react-hot-toast"
import { Dispatch, SetStateAction } from "react"
import { useRouter } from "next/navigation"
import { Position } from "@/types"


const formSchema = z.object({
    title: z.string().min(1, "Enter a title"),
    description: z.string().min(8, "Description should be more than 7 characters")
})

export default function AddPositionForm({ onChange }: { onChange: Dispatch<SetStateAction<boolean>> }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: ""
        },
    })

    const createPosition = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (!user.token) {
                throw new Error("Please login again")
            }

            return ADD_POSITION(values, user.token)
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['positions'], (oldData: Position[]) => {
                return oldData ? [
                    ...oldData,
                    data
                ] : oldData
            })
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        const toastSubmitId = toast.loading("Creating position ...")

        createPosition.mutate(values, {
            onSuccess: (data) => {
                toast.success(`Created position successfully`, {
                    id: toastSubmitId
                })

                onChange(false)
                router.refresh()
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4" >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createPosition.isPending} placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    disabled={createPosition.isPending}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  " placeholder="Description" {...field} />

                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={createPosition.isPending} className=" w-full" type="submit">
                    {createPosition.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                    Submit
                </Button>
            </form>
        </Form>
    )
}