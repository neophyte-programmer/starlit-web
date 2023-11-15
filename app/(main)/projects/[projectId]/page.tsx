"use client"

import { redirect } from "next/navigation"
import Image from "next/image";
import toast from "react-hot-toast";
import BouncingBalls from "@/components/loaders/bouncing-balls";
import { GET_SINGLE_PROJECT } from "@/utils/server/project";
import { useQuery } from "@tanstack/react-query"
import ReactPlayer from "react-player"
import { convertDate } from "@/lib/utils";



export default function ProjectSlugPage({ params: { projectId } }: { params: { projectId: string } }) {
   
    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: [projectId],
        queryFn: async () => {
                const projects = await GET_SINGLE_PROJECT(projectId)
                return projects.data
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
        <>
            <main className="grid md:grid-cols-2 gap-y-2 gap-x-4 container">
            <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src={data.thumbnail} alt={data.name} className="aspect-square object-cover" fill />
            </div>
            <div className="flex flex-col justify-center">
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                    {data.name}
                </p>
                <p className="text-neutral-500 max-sm:text-sm mt-2">
                    {data.description}
                </p>
                <p className="text-neutral-500 mt-4">
                    Location: <span className="text-black">{data.location}</span>
                </p>
                <p className="text-neutral-500 mt-2">
                    Date: <span className="text-black">{convertDate(data.date)}</span>
                </p>
                

            </div>
            <div className="flex flex-col gap-4 mt-4 col-span-1 md:col-span-2">
                <section className="flex flex-col gap-2">
                    <p className="text-lg font-semibold tracking-tight">
                        Pictures
                    </p>
                    {
                        data.pictures.length > 0 ? (
                            <div className="w-full gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 ">
                                {
                                    data.pictures.map((pic) => (
                                        <div className="relative aspect-square overflow-hidden rounded-lg" key={pic.id} >
                                            <Image src={pic.url} alt={data.name} className="aspect-square object-cover" fill />
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                There are no pictures for this project yet
                                
                            </div>
                        )
                    }

                </section>
                <section className="flex flex-col gap-2">
                    <p className="text-lg font-semibold tracking-tight">
                        Videos
                    </p>
                    {
                        data.videos.length > 0 ? (
                            <div className="w-full grid grid-cols-1 gap-6 lg:grid-c  ">
                                {
                                    data.videos.map((vid) => (
                                        <div className="w-max border" key={vid.id} >
                                            <ReactPlayer controls url={vid.url} />
                                        </div>
                                    ))
                                }
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                There are no videos for this project yet
                                
                            </div>
                        )
                    }

                </section>
            </div>
        </main>
        </>
    )
}