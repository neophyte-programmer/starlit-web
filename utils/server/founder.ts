import Axios from "../axios"
import { ApiResponse, ChangePasswordPayload, FounderUser, UpdateFounderPayload } from "@/types"

export const GET_ALL_FOUNDERS = async (token: string) => {
    try {
        const response: ApiResponse<FounderUser[]> = await Axios({
            method: "GET",
            url: `/founder`,
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

export const UPDATE_FOUNDER = async (id: string, info: UpdateFounderPayload, token: string) => {
    try {
        const response: ApiResponse<FounderUser> = await Axios({
            method: "PUT",
            url: `/founder/${id}`,
            data: info,
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

export const CHANGE_FOUNDER_PASSWORD = async (id: string, info: ChangePasswordPayload ,token: string) => {
    try {
        const response: ApiResponse<FounderUser> = await Axios({
            method: "PATCH",
            url: `/founder/change-password/${id}`,
            data: info,
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