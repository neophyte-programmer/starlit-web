import FounderCard from "@/components/cards/founder-card";
import TeamCard from "@/components/cards/team-card";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { founders } from "@/utils/data";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <Breadcrumb
                bg="/about.jpeg"
                subtitle="Every child is your child"
                title="Starlit Child Ghana"
                position="center"
            />
            <main className=" h-full  flex flex-col gap-4 container">
                <section id="history" className="">
                    <div className='w-full flex  flex-col justify-center gap-'>
                        <p className='uppercase  text-sm text-starlit-pink'>Our History</p>
                        <h3 className='font-semibold text-3xl'>Committed to changing lives since 2020 </h3>
                        <p className='mt-4'>
                            A question came up during a discussion with my classmates in shs. I went back to sleep thinking and pondering over it. How do orphans eat? How do they clothe? How are their emotional needs handled?
                            <br />
                            <br />

                            I had a suggestion by the next day; we could make a donation after school to an orphanage. With this suggestion well accepted by my classmates, we started making preparations towards the day. We went round each house collecting provisions from students at the end of the semester and we also made monetary contributions to support this cause.
                            <br />
                            <br />

                            We had our very first donation in October 2020 at eye of God children&apos;s home in Nsawam. After that donation, we thought of a broader picture- forming a foundation where we could support others from time to time.
                            <br />
                            <br />
                            In October 2021, we came together, made contributions internally and donated several items to Nyamedua children&apos;s home. On 30th October 2022,we went out to the streets of madina and Accra and donated to the people on the street. A volunteer reached out to us about a deprived school at Adukrom in the eastern region. Once again,we pulled resources together and donated educational items and some items that were the pressing needs of the school. It is the aim of starlit child Ghana to partner with various individuals and organizations to be able to support children.
                        </p>
                        <div className="ml-auto italic flex mt-4 items-center bg-muted rounded-lg">
                            <p className="p-2">
                            ~  Matilda Kyerewaa Adjah, Founder

                            </p>
                            <div className="h-full w-2 bg-starlit-blue ml-2" />
                            
                        </div>

                    </div>
                </section>
                {/* <div className='bg-neutral-200 rounded-3xl  overflow-hidden relative w-full min-h-[50vh] md:min-h-[60vh] '>
                    <Image priority src="/images/hero.jpeg" alt="children" fill className='object-cover' />
                </div> */}

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