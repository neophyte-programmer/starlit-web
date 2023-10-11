import { APP_NAME, CONTACT } from "@/utils/constants";
import { footerSocials } from "@/utils/data";
import Image from "next/image";
import ActionTooltip from "../action-tooltip";
import Link from "next/link";
import { MdCall, MdMail } from "react-icons/md";
import NewsletterForm from "../forms/newsletter-form";

export default function Footer() {
    return (
        <footer className="bg-blue-950 min--[40vh] py-12 relative text-white overflow-hidden ">
            <div className="flex items-start gap-2 absolute right-8 top-0 h-[170px] md:h-[200px]">
                <div className="w-[20px] md:w-[30px] h-[85%] bg-starlit-pink" />
                <div className="w-[20px] md:w-[30px] h-[50%] bg-starlit-pink" />
                <div className="w-[20px] md:w-[30px] h-[70%] bg-starlit-pink" />
                <div className="w-[20px] md:w-[30px] h-full bg-starlit-pink" />
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full container">
                <div className="w-full flex flex-col items-start gap-4 h-full md:border-r md:p-4 ">
                    <div className="flex flex-col items-start">
                        <Image src="/images/logos/favi.png" className="aspect-square" alt="" width={120} height={50} />
                        <div className="">
                            <p className="text-lg" >
                                {APP_NAME}
                            </p>
                            <p className="text-sm">
                                We are driven by a profound vision to make a meaningful and positive impact on the lives of every child.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <h1 className="text-2xl font-medium ">
                            Get in touch
                        </h1>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <MdMail className="text-2xl" />
                                {
                                    CONTACT.email.primary
                                }
                            </div>
                            <div className="flex items-center gap-2">
                                <MdCall className="text-2xl" />
                                {
                                    CONTACT.phone.primary
                                }
                            </div>
                            <div className="flex items-center gap-4">
                                {
                                    footerSocials.map((social, i) => (
                                        <ActionTooltip label={`Follow us on ${social.title}`} key={i}>
                                            <Link className="hover:text-starlit-gold" href={social.link}>
                                                <social.icon className="text-2xl" />
                                            </Link>
                                        </ActionTooltip>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:col-span-2 h-full gap-8 flex flex-col">
                    <NewsletterForm /> 
                    <div className="w-full max-w-lg flex items-center flex-wrap gap-8 md:p-8">
                        <Link className="hover:text-starlit-gold" href='/'>
                            Home
                        </Link>
                        <Link className="hover:text-starlit-gold" href='/about'>
                            About
                        </Link>
                        <Link className="hover:text-starlit-gold" href='/donate'>
                            Sponsor / Donate
                        </Link>
                        <Link className="hover:text-starlit-gold" href='/projects'>
                            Our Projects
                        </Link>
                        <Link className="hover:text-starlit-gold" href='/contact'>
                            Contact
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    )
}