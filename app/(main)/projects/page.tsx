"use client"
import Breadcrumb from "@/components/navigation/breadcrumb";
import ProjectCard from "@/components/cards/project-card";
import { useQuery } from "@tanstack/react-query"
import BouncingBalls from "@/components/loaders/bouncing-balls";
import { GET_ALL_PROJECTS } from "@/utils/server/project";

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

    console.log(error, isPending)
    

    return (
        <>
            <Breadcrumb
                bg="/images/freepik/hero1.jpg"
                subtitle="The people and places where we have spread our love"
                title="Our Projects"
            />
            <main className="min-h-screen container flex flex-col gap-4">
                <section className="">
                    <div className='w-full flex  flex-col justify-center gap-'>
                        <p className='uppercase  text-sm text-starlit-pink'>Our Projects</p>
                        <h3 className='font-semibold text-3xl'>Passionately embarking on life-changing projects</h3>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nemo, laudantium incidunt rerum eius minus hic adipisci eaque, necessitatibus, blanditiis provident consequatur quam ipsam assumenda. Ea distinctio repudiandae ratione odit a exercitationem magni esse. Ipsum explicabo totam aspernatur autem consequatur.
                        </p>
                        <p className='mt-4'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, reiciendis molestiae non magni aut debitis dolore odit eos alias aliquid fuga, corrupti architecto, fugit ratione mollitia voluptas est sapiente iusto cum. Qui eligendi aliquid at officiis voluptatibus veritatis quos beatae! Et necessitatibus est, expedita harum fugiat laboriosam blanditiis veritatis tempore?
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
                            isError || data === undefined ? <>
                                An error occured. Please refresh the page
                            </> : (
                                <>
                                    {
                                        isPending ? <BouncingBalls /> : (
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