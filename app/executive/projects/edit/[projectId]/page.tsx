"use client"
import { useQuery } from "@tanstack/react-query"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"
import { useStateValue } from "@/context/StateProvider"
import { GET_SINGLE_PROJECT } from "@/utils/server/project"
import BouncingBalls from "@/components/loaders/bouncing-balls"
import EditProjectForm from "@/components/forms/edit-project-form"
import AddProjectPictureForm from "@/components/forms/add-project-picture-form"
import ProjectPictureDBCard from "@/components/cards/project-picture-db-card"
import AddProjectVideoForm from "@/components/forms/add-project-video-form"
import ProjectVideoDBCard from "@/components/cards/project-video-db-card"
import DeleteProjectDialog from "@/components/dialogs/delete-project-dialog"

interface Props {
    params: {
        projectId: string
    }
}

export default function ProjectIdPage({ params: { projectId } }: Props) {
    const [{ user }, dispatch] = useStateValue()

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: [projectId],
        queryFn: async () => {
            if (user.token) {
                const projects = await GET_SINGLE_PROJECT(projectId)
                return projects.data
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
        <>
            <DeleteProjectDialog data={data} />
            <EditProjectForm data={data} />
            <section className="flex flex-col gap-2">
                <p className="text-lg font-semibold tracking-tight">
                    Pictures
                </p>
                {
                    data.pictures.length > 0 ? (
                        <div className="w-full grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 ">
                            {
                                data.pictures.map((pic) => (
                                    <ProjectPictureDBCard data={data} key={pic.id} media={pic} />
                                ))
                            }
                            <AddProjectPictureForm data={data} />

                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            There are no pictures for this project yet
                            <AddProjectPictureForm data={data} />
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
                        <div className="w-full grid gap-4">
                            <AddProjectVideoForm data={data} />

                            {
                                data.videos.map((pic) => (
                                    <ProjectVideoDBCard data={data} key={pic.id} media={pic} />
                                ))
                            }


                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            There are no videos for this project yet
                            <AddProjectVideoForm data={data} />
                        </div>
                    )
                }

            </section>
        </>
    )
}