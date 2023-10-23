import { APP_NAME } from "@/utils/constants";
import { Metadata } from "next";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { projects } from "@/utils/data";
import ProjectCard from "@/components/cards/project-card";



export const metadata: Metadata = {
    title: `Projects | ${APP_NAME}`,
    description: 'Our organization, Starlit, is driven by a profound vision to make a meaningful and positive impact on the lives of every child. With a passionate commitment to this vision, our mission is to comprehensively address the educational, physical, and emotional needs of children. Our overarching objective is to extend a helping hand and support the less privileged members of our society, transcending boundaries of age, gender, religion, and race.',
    icons: { icon: '/images/logos/favicon.ico' }
}

export default function ProjectsPage() {
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
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-8">
                        {
                            projects.map((project) => (
                                <ProjectCard key={project.slug} project={project} />
                            ))
                            }
                    </div>

                </section>
            </main>
        </>
    )
}