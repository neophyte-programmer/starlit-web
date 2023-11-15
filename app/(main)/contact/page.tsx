import ActionTooltip from "@/components/action-tooltip";
import SendEnquiryForm from "@/components/forms/send-enquiry-form";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { APP_NAME, CONTACT } from "@/utils/constants";
import { footerSocials } from "@/utils/data";
import Link from "next/link";
import { MdCall, MdMail } from "react-icons/md";

export default function ContactPage() {
    return (
        <div>
            <Breadcrumb
                bg="/images/donate.jpg"
                title={`Contact Us`}
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