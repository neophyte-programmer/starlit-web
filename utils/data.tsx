import { BsFacebook, BsFillMicFill, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaEquals } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
import { CoreValue, Founder, Partner, Project, SocialLink, Team } from "@/types";

export const coreValues: CoreValue[] = [
    {
        icon: MdVolunteerActivism,
        title: "Compassion",
        desc: "Our NGO is driven by a deep sense of empathy and care guiding our actions for those we serve.",
    },
    {
        icon: FaEquals,
        title: "Equality",
        desc: "We are unwavering in our pursuit of equal opportunities and rights for all individuals, irrespective of their circumstances.",
    },
    {
        icon: BsFillMicFill,
        title: "Advocacy",
        desc: "Advocacy is at the forefront of our mission, as we tirelessly champion the needs and rights of those in need in society.",
    },
    {
        icon: IoIosPeople,
        title: "Community-Centered",
        desc: "We place the community at the heart of our efforts, engaging and collaborating with local stakeholders to empower individuals through our initiatives",
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

export const founders: Founder[] = [
    {
        img: "/images/matilda.jpeg",
        name: "Matilda Kyerewaa Adjah",
        socials: {
            // facebook: "https://facebook.com",
            instagram: "https://www.instagram.com/matildaadjah/",
            linkedin: "https://www.linkedin.com/in/matilda-kyerewaa-adjah/",
            // twitter: "https://twitter.com"
        }
    },
    {
        img: "/images/nana-akua.jpeg",
        name: "Nana Akua Aniagyei Amponsah",
        socials: {
            // facebook: "https://facebook.com",
            // instagram: "https://instagram.com",
            linkedin: "https://www.linkedin.com/in/nana-akua-aniagyei-amponsah-078721221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            // twitter: "https://twitter.com"
        }
    },
    
]


export const team: Team[] = [
    {
        img: "/images/freepik/woman2.jpg",
        name: "John Doe",
        position: "Treasurer",
        socials: {
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    },
    {
        img: "/images/freepik/man1.avif",
        name: "Jane Doe",
        position: "Treasurer",
        socials: {
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    },
    {
        img: "/images/freepik/man3.avif",
        name: "John Doe",
        position: "Treasurer",
        socials: {
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    },
    {
        img: "/images/freepik/woman4.avif",
        name: "John Doe",
        position: "Treasurer",
        socials: {
            facebook: "https://facebook.com",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    },
]

export const projects: Project[] = [
    {
        thumbnail: "/2.jpg",
        slug: "eye-of-the-lord-nsawam",
        title: "Eye of the Lord Orphanage, Nsawam",
        date: "16th October, 2020",
        description: "",
        videos: [],
        pictures: []
    },
    {
        thumbnail: "/1.jpg",
        slug: "nyamedua-childrens-home-adenta",
        title: "Nyamedua Children's Home, Adenta",
        date: "30th October, 2021",
        description: "",
        videos: [],
        pictures: []
    },
    {
        thumbnail: "/1.jpg",
        slug: "street-donation-in-madina-and-spanner",
        title: "Street Donation in Madina and Spanner",
        date: "3rd December, 2022",
        description: "",
        videos: [],
        pictures: []
    },
    {
        thumbnail: "/1.jpg",
        slug: "akode-da-basic-school-adukrom",
        title: "Akode D/A Basic School, Adukrom",
        date: "13th September, 2023",
        description: "",
        videos: [],
        pictures: []
    },
]

export const featuredCauses = [
    {
        thumbnail: "education.jpg",
        cause: "Education",
        description: `Supporting brighter futures! 🌟 We on a mission to light up young minds by ensuring every child has access to quality education. Through our dedicated efforts, we provide financial aid, school supplies, and educational resources to underprivileged children. Join us in building a world where education knows no boundaries. Together, we can make a difference, one child at a time. 📚✨`
    },
    {
        thumbnail: "hands.jpg",
        cause: "Health",
        description: `Caring for our community's well-being! ❤️ Cause number two focuses on health initiatives that impact lives. From medical outreach programs to promoting healthy living, we're dedicated to creating a healthier and happier community. Join us in making wellness a priority and spreading the message of good health far and wide. Together, we can build a stronger, healthier world! 🌍💪`
    },
    {
        thumbnail: "food.jpg",
        cause: "Food",
        description: `Nourishing bodies, nurturing lives! 🍲 Cause number three is all about ensuring no one goes to bed hungry. Through food drives, community kitchens, and sustainable agriculture projects, we're working towards a world where everyone has access to nutritious meals. Join us in the fight against hunger and let's create a future where every plate is full and every belly is satisfied. 🌽🍚`
    }
]


