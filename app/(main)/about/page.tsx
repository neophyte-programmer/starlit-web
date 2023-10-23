import FounderCard from "@/components/cards/founder-card";
import TeamCard from "@/components/cards/team-card";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Button } from "@/components/ui/button";
import { founders, team } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <Breadcrumb
                bg="/images/freepik/her3.jpg"
                subtitle="Every child is your child"
                title="Starlit Child Ghana"
            />
            <main className=" h-full  flex flex-col gap-4 container">
                <section id="history" className="">
                    <div className='w-full flex  flex-col justify-center gap-'>
                        <p className='uppercase  text-sm text-starlit-pink'>Our History</p>
                        <h3 className='font-semibold text-3xl'>Committed to changing lives since 2020 </h3>
                        <p className='mt-4'>
                            Starlit Child Ghana is a Ghanaian registered NGO dedicated to empowering children and building bright futures through education and care. Embracing the belief that every child possesses an inner star of potential and hope, Starlit is committed to nurturing and brightening these stars through the provision of food, water,education, mentorship, and community support.

                            Established in 2020, we have undertaken a series of donation exercises in orphanages and on the street,dedicated to providing underprivileged children basic necessities such as food, water and education.
                        </p>
                        <p className='mt-4'>
                            Starlit Child Ghana is a Ghanaian registered NGO dedicated to empowering children and building bright futures through education and care. Embracing the belief that every child possesses an inner star of potential and hope, Starlit is committed to nurturing and brightening these stars through the provision of food, water,education, mentorship, and community support.

                            Established in 2020, we have undertaken a series of donation exercises in orphanages and on the street,dedicated to providing underprivileged children basic necessities such as food, water and education.
                        </p>

                    </div>
                </section>
                <div className='bg-neutral-200 rounded-3xl  overflow-hidden relative w-full min-h-[50vh] md:min-h-[60vh] '>
                        <Image priority src="/images/hero.jpeg" alt="children" fill className='object-cover' />
                    </div>
                
                <section id="what-we-do" className="">
                    <div className='w-full flex  flex-col justify-center gap-'>
                        <h3 className='font-semibold text-4xl'>What We Do At Starlit</h3>

                        <p className='mt-4'>
                            We are on a mission to make a meaningful and positive impact on the lives of every child. Our vision is to leave a lasting, beneficial mark by addressing the educational, physical, and emotional needs of children. Starlit&apos;s primary objective is to be a source of support and care for the less privileged in society, transcending age, gender, religion, and race.
                            <br /> <br />
                            Through a set of specific objectives, we aim to provide basic necessities to children, instill hope in vulnerable youth, promote happiness and joy through activities like sports, music, and dance, and emphasize the crucial role of education. Moreover, we are determined to contribute to reducing social issues within their communities. In essence, we are dedicated to creating a brighter, more hopeful future for children, irrespective of their circumstances.
                        </p>

                    </div>
                </section>
                <section id="founders" className="flex flex-col gap-4 md:gap-8  items-center justify-center w-full " >
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-semibold">Our Founders</h1>
                        <p className="italic text-sm text-starlit-pink mt-2">
                            Meet the brilliant people behind our noble cause
                        </p>
                    </div>
                    <div className="max-w-max grid grid-cols-1 md:grid-cols-2  gap-6 mx-auto w-full ">
                        {
                            founders.map((founder, i) => (
                                <FounderCard data={founder} key={i} />
                            ))
                        }
                    </div>
                </section>
                
            </main>
        </>

    )
}