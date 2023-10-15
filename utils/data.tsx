import { BsFacebook, BsFillMicFill, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaEquals } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
import { CoreValue, Partner, SocialLink } from "@/types";

export const coreValues: CoreValue[] = [
    {
        icon: MdVolunteerActivism,
        title: "Compassion",
        desc: "We show empathy and care for the well-being of the children in Ghana, understanding their unique needs and challenges.",
    },
    {
        icon: FaEquals,
        title: "Equality",
        desc: "We ensure that all children, regardless of their background or circumstances, have equal access to opportunities and support",
    },
    {
        icon: BsFillMicFill,
        title: "Advocacy",
        desc: "We show empathy and care for the well-being of the children in Ghana, understanding their unique needs and challenges.",
    },
    {
        icon: IoIosPeople,
        title: "Community-Centered",
        desc: "We show empathy and care for the well-being of the children in Ghana, understanding their unique needs and challenges.",
    },
]

export const partners: Partner[] = [
    {
        img: "/coca-cola.png",
        name: "Coca Cola"
    },
    {
        img: "/burger-king.png",
        name: "Burger King"
    },

]

export const footerSocials: SocialLink[] = [
    {
        icon: BsFacebook,
        title: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100092190588769&mibextid=ZbWKwL",
    },
    {
        icon: BsTwitter,
        title: "Twitter / X",
        link: "https://x.com/starlitchildgh?s=21",
    },
    {
        icon: BsLinkedin,
        title: "LinkedIn",
        link: "https://www.linkedin.com/company/starlit-child-ghana/ ",
    },
    {
        icon: BsInstagram,
        title: "Instagram",
        link: "https://instagram.com/starlitchildgh?igshid=MzRlODBiNWFlZA== ",
    },
] 