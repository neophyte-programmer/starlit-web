"use client"
import BouncingBalls from "@/components/loaders/bouncing-balls"

import { useQuery } from "@tanstack/react-query"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"
import { useStateValue } from "@/context/StateProvider"
import { GET_ALL_PROJECTS } from "@/utils/server/project"
import ProjectDBCard from "@/components/cards/project-db-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
    const [{ user }, dispatch] = useStateValue()

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            if (user.token) {
                const projects = await GET_ALL_PROJECTS(user.token)
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
        <div className="w-full flex flex-col gap-4">
            {
                data.length <= 0 ? <>
                    <div className="w-full h-full min-h-[70vh] flex items-center flex-col justify-center gap-4">
                        <p className="text-2xl font-semibold tracking-tighter">
                            No projects yet
                        </p>
                        <p>
                            There are no projects at the moment
                        </p>
                        <Link className="" href="/admin/projects/add">
                            <Button >
                                Add New Project
                            </Button>
                        </Link>
                   </div>
                </> : (
                    <>
                        <Link className="ml-auto" href="/admin/projects/add">
                            <Button >
                                Add New Project
                            </Button>
                        </Link>
                        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {
                                data?.map((proj) => (
                                    <ProjectDBCard project={proj} key={proj._id} />
                                ))
                            }
                        </main >
                    </>
                )
            }

        </div>
    )
}