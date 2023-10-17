import { IconType } from "react-icons"

export type Children = {
    children: React.ReactNode
}

export type CoreValue = {
    icon: IconType
    title: string
    desc: string
}

export type Partner = {
    img: string
    name: string
}

export type SocialLink = {
    icon: IconType
    title: string
    link: string
}

export type Founder = {
    img: string
    name: string
    about: string
    socials?: {
        facebook?: string
        twitter?: string
        instagram?: string
        linkedin?: string
    }
}

export type Team = Omit<Founder, "about"> &  {
    position: string
}