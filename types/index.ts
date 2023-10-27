import { AxiosResponse } from "axios"
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

export type Project = {
    thumbnail: string
    slug: string
    title: string
    date: string
    description: string
    videos?: string[]
    pictures?: string[]
}

export type Action = {
    type: string;
    payload: any;
};

export type State = {
    user: any;
    role: any
    positions: Position[]
};

export type ApiResponse<T> = AxiosResponse<{
    success: boolean,
    message: string
    data: T
}>

export type User = {
    firstname: string
    lastname: string
    email: string
    mobile: string
    token: string
    createdAt: string
    updatedAt: string
}

export type FounderUser = User 

export type ExecutiveUser = User & {
    position: string
    status: "current" | "past"
}

export type ServerCallback = ((data: any) => void) | (() => void)

export type Position = {
    _id: string
    title: string
    description: string
    createdAt: string
    updatedAt: string
    __v?: number
}