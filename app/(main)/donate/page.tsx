"use client"
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Button } from "@/components/ui/button";
import { APP_NAME, MOMO_DETAILS } from "@/utils/constants";
import { featuredCauses, joinUs } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { cn, copyToClipboard } from "@/lib/utils";

export default function DonatePage() {
    return (
        <>
            <Breadcrumb
                bg="donate.jpeg"
                title={`Donate to ${APP_NAME} `}
                subtitle="Every child matters, every bit helps. Together, we can do wonders to help children in need"
            />
            <main className="container min-h-screen">
                <section className="flex flex-col gap-8 p">
                    <h2 className="text-center text-3xl font-medium md:text-4xl ">
                        Featured Causes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            featuredCauses.map((cause) => (
                                <article className="w-full flex flex-col gap-2" key={cause.cause}>
                                    <div className="w-full relative aspect-video">
                                        <Image fill className="object-cover" src={`/images/${cause.thumbnail}`} alt={cause.cause} />
                                    </div>
                                    <h3 className="text-center text-xl font-semibold">
                                        {cause.cause}
                                    </h3>
                                    <p className="text-center text-sm">
                                        {cause.description}
                                    </p>
                                </article>
                            ))
                        }
                    </div>
                    <Link href="/about" className="mx-auto">
                        <Button size={"lg"} >
                            Read More
                        </Button>
                    </Link>
                </section>
                <section className="flex flex-col gap-8 text-center">
                    <h2 className="text-center text-3xl font-medium md:text-4xl ">
                        How Can You Help?
                    </h2>
                    <p>
                        Join the journey of illuminating young minds with Starlit Child! Every donation you make is a step towards a brighter future for children in need. With your support, we can provide access to education, empower dreams, and break the chains of poverty. Together, let&apos;s write stories of hope and opportunity. Your contribution, big or small, fuels the flame of education that can light up a child&apos;s path for a lifetime. Donate today and be the spark that transforms lives.
                    </p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={"pink"} className="w-max mx-auto">
                                Donate Now
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Donate Via Momo</DialogTitle>
                                <DialogDescription>
                                    Send us a token to show your support to our cause
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col gap-2">
                                <div>
                                    <span className="font-semibold">
                                        Number:
                                    </span>
                                    {" "} {MOMO_DETAILS.number}
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Name:
                                    </span>
                                    {" "} {MOMO_DETAILS.name}
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Service:
                                    </span>
                                    {" "} {MOMO_DETAILS.service}
                                </div>
                            </div>
                            <Button onClick={() => copyToClipboard(MOMO_DETAILS.number)} className="ml-auto">
                                Copy Number
                            </Button>
                        </DialogContent>
                    </Dialog>


                </section>
                <section className="flex flex-col gap-8 text-center" >
                    <h2 className="text-center text-3xl font-medium md:text-4xl ">
                        Join Our Team
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {
                            joinUs.map(({ step, description }) => (
                                <article className={cn(
                                    "relative text-white p-4 rounded-md  flex items-center gap-4 ",
                                    step === 1 && "bg-blue-400 text-blue-200",
                                    step === 2 && "bg-blue-500 text-blue-300",
                                    step === 3 && "bg-blue-600 text-blue-400",
                                )} key={step}>
                                    <p className="font-bold  text-[7rem] ">
                                        {step}
                                    </p>
                                    <p className=" text-white  text-left">
                                        {description}
                                    </p>
                                </article>
                            ))
                        }
                        </div>
                </section>
            </main>
        </>
    )
}