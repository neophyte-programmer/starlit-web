"use client"
import { Media, ProjectSchema } from "@/types";
import Image from "next/image";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import {
    ref,
    getDownloadURL,
    uploadBytesResumable,
    deleteObject
} from '@firebase/storage'
import { useStateValue } from "@/context/StateProvider";
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { REMOVE_PROJECT_PICTURE, REMOVE_PROJECT_VIDEO } from "@/utils/server/project";
import { storage } from "@/firebase.config"
import ReactPlayer from 'react-player'



export default function ProjectVideoDBCard({ media, data }: { media: Media; data: ProjectSchema }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()
    const { id, url, ref: imageRef } = media
    

    const modifyMedia = useMutation({
        mutationFn: (values: Media) => {
            if (!user.token) {
                throw new Error("Please login again")
            }

            

            console.log(values)
            return REMOVE_PROJECT_VIDEO(data._id, values.id, user.token)
        },
        onSuccess: (edited) => {
            queryClient.setQueryData([data._id], (oldData: ProjectSchema) => {

                const newData = oldData ? {
                    ...oldData,
                   videos: edited.videos

                } : oldData

                return newData
            })
            toast.success("Pictures Updated")
            location.reload()

        },
        onError: (error: any) => {
            console.log(error);
            
            toast.error("Something went wrong. Try again")
        }

    })


    const deleteImage = () => {
        const uploadToast = toast.loading("Deleting image ...")

        const deleteRef = ref(storage, imageRef)

        deleteObject(deleteRef).then(() => {
            toast.success("Deleted image from db", {
                id: uploadToast
            })
            modifyMedia.mutate(media)
        }).catch((error) => {
            toast.error("COuldnt delete image from db", {
                id: uploadToast
            })
        })

    }
    return (
        <div className="w-max relative ">
            <button
                className='bg-red-500 absolute z-10 right-0 top-0 m-1 cursor-pointer inline-block p-2 rounded-full hover:bg-red-600'
                onClick={deleteImage}
            >
                <AiOutlineDelete className=' text-2xl text-white ' />
            </button>
            <div className="w-max border overflow-hidden rounded-lg" key={id} >
                <ReactPlayer
                    url={url}
                    // url="https://firebasestorage.googleapis.com/v0/b/starlit-web.appspot.com/o/projects%2F2de22965?alt=media&token=83bd2fab-097d-4ffc-812a-b09342297f30"
                    controls
                    
                />
            </div>
        </div>
    )
}