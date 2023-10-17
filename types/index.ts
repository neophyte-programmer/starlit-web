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