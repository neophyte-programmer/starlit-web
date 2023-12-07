import { BsFacebook, BsFillMicFill, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaCity, FaEquals } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";
import { CoreValue, Founder, Partner, Project, SocialLink, Team } from "@/types";

export const coreValues: CoreValue[] = [
    {
        icon: IoIosPeople,
        title: "Teamwork",
        desc: "Starlit Child Ghana is dedicated to positively shaping the lives of children by meeting their educational, physical, and emotional needs, a mission that relies on the collective efforts of our members and executives. Unwavering in our commitment, we prioritize collaboration towards a shared goal, harnessing the unique strengths of each member and executive for the greater good of the organization. ",
    },
    {
        icon: FaCity,
        title: "Community Commitment",
        desc: "Our pledge to community commitment drives collaborative efforts with parents, educators, and community stakeholders, creating a holistic and enriching experience for every child under our care and collectively shaping a brighter future. We aspire to nurture their potential, instilling resilience, and empowering them to thrive in all aspects of life. ",
    },
    {
        icon: BsFillMicFill,
        title: "Integrity",
        desc: "Starlit upholds a commitment to integrity, fostering a culture of honesty, transparency, and ethical principles in all operations, thereby building trust within the community, and creating a safe, nurturing environment for children to thrive. We aim to be exemplary custodians of trust by instilling in them the values of honesty, respect, and responsibility for a lasting positive impact on their lives.        ",
    },
    {
        icon: MdVolunteerActivism,
        title: "Service Beyond Self",
        desc: "Upholding 'Service Beyond Self' as a core value, we drive ourselves to positively influencing children's lives by going above and beyond to address their educational, physical, and emotional needs. We strive to create lifelong, transformative experiences that empower every child.",
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


export const joinUs = [
    {
        step: 1,
        description: "Grab a subscription form of GHc20 by paying via momo number 0206272355. Reference: Your Name"
    },
    {
        step: 2,
        description: "Send us a message on Whatsapp to the number 0278937881 to confirm payment"
    },
    {
        step: 3,
        description: "The form will be sent to you immediately. The information will be processed for you to be part of the team"
    }
]