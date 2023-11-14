import { Founder } from "@/types";
import Image from "next/image";
import ActionTooltip from "../action-tooltip";
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillInstagram} from "react-icons/ai";

export default function FounderCard({ data }: { data: Founder }) {
    const { img, name, socials } = data
    return (
        <article className="w-full text-center group flex flex-col items-center justify-center gap-4 p-4" >
            <div className="aspect-square rounded-full relative w-[220px] mx-auto overflow-hidden">
                <Image src={img} alt={name} fill className="object-cover group-hover:scale-110 transition duration-500 object-top rounded-full" />
            </div>
            <h1 className="font-semibold text-2xl">
                {name}
            </h1>
           

            {
                socials && (

                    <div className="flex gap-4 items-center justify-center">
                        {
                            socials.facebook && (
                                <ActionTooltip label="Facebook">
                                    <Link href={socials.facebook}>
                                        <BsFacebook className="text-neutral-500 hover:text-starlit-pink transition text-2xl" />
                                    </Link>
                                </ActionTooltip>
                            )
                        }
                        {
                            socials.linkedin && (
                                <ActionTooltip label="LinkedIn">
                                    <Link href={socials.linkedin}>
                                        <BsLinkedin className="text-neutral-500 hover:text-starlit-pink transition text-2xl" />
                                    </Link>
                                </ActionTooltip>
                            )
                        }
                        {
                            socials.instagram && (
                                <ActionTooltip label="Instagram">
                                    <Link href={socials.instagram}>
                                        <AiFillInstagram className="text-neutral-500 hover:text-starlit-pink transition text-3xl" />
                                    </Link>
                                </ActionTooltip>
                            )
                        }
                        {
                            socials.twitter && (
                                <ActionTooltip label="Twitter / X">
                                    <Link href={socials.twitter}>
                                        <BsTwitter className="text-neutral-500 hover:text-starlit-pink transition text-2xl" />
                                    </Link>
                                </ActionTooltip>
                            )
                        }
                    </div>
                )
            }
        </article>
    )
}