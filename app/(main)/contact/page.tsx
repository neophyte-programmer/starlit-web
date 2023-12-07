import ActionTooltip from "@/components/action-tooltip";
import SendEnquiryForm from "@/components/forms/send-enquiry-form";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { APP_NAME, CONTACT } from "@/utils/constants";
import { footerSocials } from "@/utils/data";
import Link from "next/link";
import { MdCall, MdMail } from "react-icons/md";

import { Metadata } from "next";



export const metadata: Metadata = {
    title: `Contact Us | ${APP_NAME}`,
    description: 'Our organization, Starlit, is driven by a profound vision to make a meaningful and positive impact on the lives of every child. With a passionate commitment to this vision, our mission is to comprehensively address the educational, physical, and emotional needs of children. Our overarching objective is to extend a helping hand and support the less privileged members of our society, transcending boundaries of age, gender, religion, and race.',
    icons: { icon: '/images/logos/favicon.ico' }
}

export default function ContactPage() {
    return (
        <div>
            <Breadcrumb
                bg="contact.jpeg"
                title={`Contact Us`}
                position="bottom"
                subtitle="Reach out to us and talk to our representatives"
            />
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 py-16 container">

                <SendEnquiryForm />
                <div className="w-full flex flex-col gap-8 ">
                    <p className="md:text-2xl text-xl">Or contact us through social media</p>
                    
                    <div className="flex flex-col gap-4 ">
                        
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
                
            </section>
        </div>
    )
}