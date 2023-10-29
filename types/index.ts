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
    _id: string
    firstname: string
    lastname: string
    email: string
    mobile: string
    token: string
    createdAt: string
    updatedAt: string
    blocked?: boolean
}

export type FounderUser = User 

export type ExecutiveUser = User & {
    position: Position 
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

export type Media = {
    id: string
    ref: string
    url: string
}

export type ProjectSchema = {
    _id: string
    name: string
    location: string
    description: string
    thumbnail: string
    date: string | Date | any
    pictures: Media[]
    videos: Media[]
    __v?: number
    createdAt: string
    updatedAt: string
}

export type UpdateFounderPayload = {
    firstname: string
    lastname: string
    mobile: string 
}

export type ChangePasswordPayload = {
    oldPassword: string
    newPassword: string
}

export type Enquiry = {
    fullname: string
    email: string
    mobile: string
    title: string
    message: string
    _id: string
    __v?: number
    createdAt: string
    updatedAt: string
}