import { AxiosResponse } from "axios"
import Axios from "../axios"
import { ApiResponse, ExecutiveUser, Position } from "@/types"

export const GET_ALL_EXECUTIVES = async (token: string) => {
    try {
        const response: ApiResponse<ExecutiveUser[]> = await Axios({
            method: "GET",
            url: `/executive`,
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

export const BLOCK_EXECUTIVE = async (id: string, token: string) => {
    try {
        const response: ApiResponse<ExecutiveUser[]> = await Axios({
            method: "PATCH",
            url: `/executive/block/${id}`,
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

export const UNBLOCK_EXECUTIVE = async (id: string, token: string) => {
    try {
        const response: ApiResponse<ExecutiveUser[]> = await Axios({
            method: "PATCH",
            url: `/executive/unblock/${id}`,
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

export const CHANGE_EXECUTIVE_STATUS = async (id: string, status: "current" | "past", token: string) => {
    try {
        const response: ApiResponse<ExecutiveUser[]> = await Axios({
            method: "PATCH",
            url: `/executive/status/${id}`,
            data: {
                status,
            },
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
        console.log(error)
    }
}