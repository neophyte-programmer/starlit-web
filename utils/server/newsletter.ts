import Axios from "../axios"
import { ApiResponse, Enquiry, Position } from "@/types"

type NewsletterPayload = {
    title: string
    letter: string
}

export const GET_SUBSCRIBERS = async ( token: string ) => {
    try {
        const response: ApiResponse<any> = await Axios({
            method: "GET",
            url: `/newsletter`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status === 200 || response.data.success) {
            return response.data
        } else {
            throw new Error("oops")
        }

    } catch (error: any) {
        throw new Error(error)
    }
}
export const CREATE_NEWSLETTER = async (info: NewsletterPayload, token: string ) => {
    try {
        const response: ApiResponse<any> = await Axios({
            method: "POST",
            url: `/newsletter`,
            data: info,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status === 200 || response.data.success) {
            return response.data.data
        } else {
            throw new Error("oops")
        }

    } catch (error: any) {
        throw new Error(error)
    }
}

export const SUBSCRIBE = async (email: string) => {
    try {
        const response: ApiResponse<any> = await Axios({
            method: "POST",
            url: `/newsletter/subscribe`,
            data: {
                email
            },
        })

        if (response.status === 200 || response.data.success) {
            return response.data.data
        } else {
            throw new Error("oops")
        }

    } catch (error: any) {
        throw new Error(error)
    }
}

export const UNSUBSCRIBE = async (email: string) => {
    try {
        const response: ApiResponse<any> = await Axios({
            method: "POST",
            url: `/newsletter/unsubscribe`,
            data: {
                email
            },
        })

        if (response.status === 200 || response.data.success) {
            return response.data.data
        } else {
            throw new Error("oops")
        }

    } catch (error: any) {
        throw new Error(error)
    }
}