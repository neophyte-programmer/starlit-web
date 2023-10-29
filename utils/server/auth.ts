import { ServerCallback } from "@/types"
import Axios from "../axios"

type LoginData = {
    email: string
    password: string
    schema: "founder" | "executive"
}

export const GET_SESSION_USER = async (type : "founder" | "executive") => {
    try {
        const response = await Axios({
            method: "GET",
            url: `/auth/refresh?schema=${type}`
        })

        if (response.status === 200) {
            return response.data.data
        } else {
            throw new Error("oops")
        }

    } catch (error: any) {
        throw new Error(error)
    }
}

export const LOGIN_USER = async(info: LoginData) => {
    try {
        const response = await Axios({
            method: "POST",
            url: `/auth/login`,
            data: info
        })

        if (response.status === 200) {
            return response.data.data
        } else {
            throw new Error("oops")
        } 
    } catch (error: any) {
        throw new Error(error)
    }
}

export const LOGOUT_USER = async (schema: "founder" | "executive") => {
    try {
        const response = await Axios({
            method: "POST",
            url: `/auth/logout`,
            data: {
                schema
            }
        })

        if (response.status === 200) {
            return response.data.data
        } else {
            throw new Error("oops")
        } 
    } catch (error: any) {
        throw new Error(error)
    }
}