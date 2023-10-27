"use client"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useStateValue } from "@/context/StateProvider"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Dispatch, SetStateAction, useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { Position } from "@/types"
import { BsEye, BsEyeSlash } from "react-icons/bs"
import BouncingBalls from "../loaders/bouncing-balls"
import { GET_ALL_POSITIONS } from "@/utils/server/positions"

const phoneRegex = /^(\+\d{1,3}[-.\s]?)?(\d{1,4}[-.\s]?)(\d{1,4}[-.\s]?)(\d{1,9})$/


const formSchema = z.object({
    firstname: z.string().min(1, "Enter a firstname"),
    lastname: z.string().min(1, "Enter a lastname"),
    mobile: z.string().min(1, "Enter a phone number").refine((value) => phoneRegex.test(value), "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email").min(1, "Enter an email"),
    position: z.string({
        required_error: "Please select an position to display.",
      }).min(1, "Choose a position"),
    password: z.string().min(6, "Enter at least 6 characters"),
})

export default function AddExecutiveForm({ onChange }: { onChange: Dispatch<SetStateAction<boolean>> }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()
    const router = useRouter()
    

    const [viewPassword, setViewPassword] = useState(false)

    const toggleViewPassword = () => {
        setViewPassword((prev) => !prev)
    }


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            mobile: "",
            position: "",
        },
    })

    const createExecutive = useMutation({
        mutationFn: (values: z.infer<typeof formSchema>) => {
            if (!user.token) {
                throw new Error("Please login again")
            }

            
            // return ADD_POSITION(values, user.token)
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

        createExecutive.mutate(values, {
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

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['positions'],
        queryFn: async () => {
            if (user.token) {
                const positions = await GET_ALL_POSITIONS(user.token)
                return positions.data
            }

        },
        retry: 3,
        staleTime: 300,
        refetchOnMount: true
    })

    

    if (isPending) {
        return (<div className="w-full min-h-[60vh] flex items-center justify-center">
            <BouncingBalls />
        </div>)
    }

    if (isError || data === undefined) {
        toast.error("Something went wrong here")
        return redirect("/admin")
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
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createExecutive.isPending} placeholder="First name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createExecutive.isPending} placeholder="Last name" {...field} />
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
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={createExecutive.isPending} placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                        control={form.control}
                        name="password"
                        disabled={createExecutive.isPending}
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
                <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a position for this executive" />
                  </SelectTrigger>
                </FormControl>
                      <SelectContent>
                          {
                              data.map((position) => (
                                  <SelectItem key={position._id} value={position._id} >
                                      {position.title}
                                  </SelectItem>
                              ))
                          }
                  
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        />
                
                <Button disabled={createExecutive.isPending} className=" w-full" type="submit">
                    {createExecutive.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                    Submit
                </Button>
            </form>
        </Form>
    )
}