"use client"
import Breadcrumb from "@/components/navigation/breadcrumb";
import ProjectCard from "@/components/cards/project-card";
import { useQuery } from "@tanstack/react-query"
import BouncingBalls from "@/components/loaders/bouncing-balls";
import { GET_ALL_PROJECTS } from "@/utils/server/project";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProjectsPage() {
    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const projects = await GET_ALL_PROJECTS()
            return projects.data
        },
        retry: 3,
        staleTime: 300,
        refetchOnMount: true
    })

    console.log(error, isPending, data)

    if (isPending) {
        return (
            <div className="w-full h-[70vh] bg-white flex text-center container flex-col gap-4 items-center justify-center">
                <h3 className="text-4xl font-semibold">Our Projects</h3>
            <p>
                We are gathering the resources for our projects
            </p>
                <BouncingBalls />
            </div>
        )
    }


    if (isError || data === undefined) {

        return <div className="w-full h-[70vh] text-center bg-white container flex flex-col gap-4 items-center justify-center">
            <h3 className="text-4xl font-semibold">Oops!</h3>
            <p>
                It seems our servers are down. Our engineers have been notified. Kindly refresh this page or try accessing it in a few minutes
            </p>
            <Link href="/">
                <Button className="w-max">
                    Back To Home
                </Button>
            </Link>
        </div>
    }


    return (
        <>
            <Breadcrumb
                bg="/projects.jpeg"
                subtitle="The people and places where we have spread our love"
                title="Our Projects"
                position="center"
            />
            <main className="min-h-screen container flex flex-col gap-4">
                <section className="">
                    <div className='w-full flex  flex-col justify-center gap-'>
                        <p className='uppercase  text-sm text-starlit-pink'>Our Projects</p>
                        <h3 className='font-semibold text-3xl'>Passionately embarking on life-changing projects</h3>
                        <p className='mt-4'>
                            Starlit Child Ghana is dedicated to making a positive change by embarking on many projects. We believe that change effective when we come together to make people&apos;s lives great. Below are some projects Starlit has embarked on
                        </p>


                    </div>
                </section>
                <section className="flex flex-col gap-4 ">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-semibold">Our Activities</h1>
                        <p className="italic text-sm text-starlit-pink mt-2">
                            Follow our journeys with others
                        </p>
                    </div>
                    <>
                        {
                            isError ? <>
                                An error occured. Please refresh the page. If this persists, kindly try again later
                            </> : (
                                <>
                                    {
                                        isPending || data === undefined ? <div className="w-full min-h-[40vh] flex items-center justify-center">
                                            <BouncingBalls />
                                        </div> : (
                                            <>
                                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-8">

                                                    {
                                                        data.map((project) => (
                                                            <ProjectCard key={project._id} project={project} />
                                                        ))
                                                    }
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                            )
                        }
                    </>



                </section>
            </main>
        </>
    )
}