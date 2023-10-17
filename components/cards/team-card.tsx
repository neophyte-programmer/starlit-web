import { Team } from "@/types";
import Image from "next/image";
import ActionTooltip from "../action-tooltip";
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function TeamCard({ data }: { data: Team }) {
    const { socials, name, img, position } = data
    return (
        <article className="w-full  group flex flex-col  gap-2 py-4" >
            <div className="aspect-[9/16]  relative w-full mx-auto overflow-hidden">
                <Image src={img} alt={name} fill className="object-cover group-hover:scale-110 transition duration-500 object-top " />
            </div>
            <p className="font-semibold text-2xl">
                {name}
            </p>
            <p className="uppercase tracking-widest text-neutral-600 font-medium">
                {position}
           </p>
            {
                socials && (

                    <div className="flex gap-4 items-center">
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