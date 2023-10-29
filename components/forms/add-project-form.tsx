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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"
import { ProjectSchema } from "@/types"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { UPDATE_PROJECT_DETAILS, CREATE_PROJECT } from "@/utils/server/project"
import { useState } from "react"
import Image from "next/image"
import { Label } from "../ui/label"
import {
    ref,
    getDownloadURL,
    uploadBytesResumable,
} from '@firebase/storage'
import { BsCamera } from 'react-icons/bs'
import { getRandomID } from "@/lib/utils"
import { AiOutlineDelete } from 'react-icons/ai'
import { storage } from "@/firebase.config"
import BouncingBalls from "../loaders/bouncing-balls"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    name: z.string().min(1, "Enter a title"),
    description: z.string().min(8, "Description should be more than 7 characters"),
    location: z.string().min(2, "Location should be more than 7 characters"),
    date: z.date({
        required_error: "A date of project is required.",
    })
})



export default function AddProjectForm() {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()
    const [thumbnail, setThumbnail] = useState<any>(null)

    const router = useRouter()

    const [fileLoading, setFileLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [previewImage, setPreviewImage] = useState<any>(null)

    const [files, setFiles] = useState<{ id: string, url: string, ref: string } | any>([])

    const previewImageFile = (e: any) => {
        if (e.target.files[0]) {
            setSelectedFile(e.target.files[0])
            setPreviewImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const deleteImage = () => {
        setFileLoading(true)
        setPreviewImage(null)
        setSelectedFile(null)
        setFileLoading(false)
    }


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            location: "",
            date: new Date()
        },
    })

    const editProject = useMutation({
        mutationFn: (values: z.infer<typeof formSchema> & { thumbnail: string}) => {
            if (!user.token) {
                throw new Error("Please login again")
            }

            

            console.log(values)
            return CREATE_PROJECT( values, user.token)
        },
        onSuccess: (edited) => {
            queryClient.setQueryData(["projects"], (oldData: ProjectSchema[]) => {

                const newData = oldData ? [
                    ...oldData,
                    edited
                ]: oldData

                return newData
            })
            toast.success("Project Created")
            router.push("/admin/projects")
        },
        onError: (error: any) => {
            console.log(error);
            
            toast.error("Something went wrong. Try again")
        }

    })

   
    function onSubmit(values: z.infer<typeof formSchema>) {
        if ((thumbnail || thumbnail !== "") && !selectedFile) {
            return null
        }

        const uploadToast = toast.loading("Uploading images ...")

        const fileName = getRandomID()

        const file = selectedFile
        const storageRef = ref(storage, `projects/${fileName}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed", (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        }, (error) => {
            toast.error("Error uploading images", { id: uploadToast })
            return
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                toast.success("Images uploaded successfully", { id: uploadToast })

                // const thumbnailDetails = {
                //     url: downloadUrl,
                //     ref: `projects/${fileName}`,
                //     id: fileName
                // }

                setThumbnail(() => downloadUrl)
                // const editToast = toast.loading("Editing project details ...")
                const newInfo = {
                    ...values,
                    thumbnail: downloadUrl
                }
                editProject.mutate(newInfo, {

                })
            })
        }
        )
        
    }
    return (
        <Form {...form}>
            <form  onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 space-y-8" >
                <div className="w-full flex items-center justify-center">
                    <div className="flex flex-col gap-2 max-w-lg">
                        <div className="aspect-square mx-auto flex items-center justify-center relative rounded-full overflow-hidden w-[250px]">
                            {
                                fileLoading ? <BouncingBalls /> : (
                                    <>
                                        {
                                            previewImage ? (
                                                <div className='w-full h-full relative'>
                                                    <img
                                                        src={previewImage}
                                                        alt=''
                                                        className='w-full relative rounded-lg object-cover h-full max-h-[320px]'
                                                    />
                                                    {/* <button
                                                        className='bg-red-500 absolute right-0 bottom-0 m-1 cursor-pointer inline-block p-2 rounded-full hover:bg-red-600'
                                                        onClick={deleteImage}
                                                    >
                                                        <AiOutlineDelete className=' text-2xl text-white ' />
                                                    </button> */}
                                                </div>
                                            ) : (
                                                <div className='flex items-center cursor-pointer justify-center border h-12 w-12 rounded-full bg-gray-100/50 '>
                                                    <BsCamera className='h-6 w-6 text-gray-400' />
                                                </div>
                                            )
                                        }
                                    </>
                                )
                            }
                            {/* <Image src={thumbnail} alt={data.name} fill className="object-cover" /> */}
                        </div>
                        <div className="w-full flex items-center justify-center flex-col gap-2">
                            <Label htmlFor="thumbnail" className="text-center w-full">
                                Choose a new thumbnail
                            </Label>
                            <Input disabled={fileLoading} onChange={previewImageFile} id="thumbnail" accept="image/*" type="file" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={editProject.isPending} placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={editProject.isPending} placeholder="Location" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="md:col-span-2">
                                <FormControl>
                                    <Textarea className="text-black resize-none outline-0 focus:ring-0 focus-visible:ring-offset-0 " disabled={editProject.isPending} placeholder="Location" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col w-full">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button disabled={editProject.isPending} className="mx-auto" type="submit">Create New Project</Button>
            </form>
        </Form>
    )
}