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
import { Textarea } from "@/components/ui/textarea"
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
import { useState } from "react"
import { Media, ProjectSchema } from "@/types"
import { ADD_PROJECT_PICTURE, ADD_PROJECT_VIDEO } from "@/utils/server/project"
import toast from "react-hot-toast"
import { Input } from "../ui/input"
import { useRouter } from "next/navigation"

export default function AddProjectVideoForm({ data }: { data: ProjectSchema }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()
    const [fileLoading, setFileLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState<any>(null)
    const [previewImage, setPreviewImage] = useState<any>(null)

    const router = useRouter()

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

    const modifyMedia = useMutation({
        mutationFn: (values: Media) => {
            if (!user.token) {
                throw new Error("Please login again")
            }

            

            console.log(values)
            return ADD_PROJECT_VIDEO(data._id, values, user.token)
        },
        onSuccess: (edited) => {
            queryClient.setQueryData([data._id], (oldData: ProjectSchema) => {

                const newData = edited

                return newData
            })
            toast.success("Videos Updated")
            
            location.reload()

        },
        onError: (error: any) => {
            console.log(error);
            
            toast.error("Something went wrong. Try again")
        }

    })

    function onSubmit(e: any) {
        
        setSelectedFile(e.target.files[0])

        const uploadToast = toast.loading("Uploading images ...")

        const fileName = getRandomID()

        const file = e.target.files[0]
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

                const newInfo = {
                    url: downloadUrl,
                    ref: `projects/${fileName}`,
                    id: fileName
                }

                
                modifyMedia.mutate(newInfo, {

                })
            })
        }
        )
        
    }
    return (
        <form >
            <div className="w-full max-w-sm flex  flex-col gap-2">
                            <Label>Click to add new video</Label>
                            <Input disabled={fileLoading} onChange={onSubmit} id="thumbnail" accept="video/*" type="file" />
                        </div>
        </form>
    )
}