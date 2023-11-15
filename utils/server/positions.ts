import { AxiosResponse } from "axios"
import Axios from "../axios"
import { ApiResponse, Position } from "@/types"

export const GET_ALL_POSITIONS = async (token: string) => {
    try {
        const response: ApiResponse<Position[]> = await Axios({
            method: "GET",
            url: `/position`,
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

export const ADD_POSITION = async (info: Pick<Position, "title" | "description">, token: string) => {
    try {
        const response: ApiResponse<Position> = await Axios({
            method: "POST",
            url: `/position`,
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

export const EDIT_POSITION = async (id: string ,info: Pick<Position, "title" | "description">, token: string) => {
    try {
        const response: ApiResponse<Position> = await Axios({
            method: "PATCH",
            url: `/position/${id}`,
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

export const DELETE_POSITION = async (id: string, token: string) => {
    try {
        const response: ApiResponse<Position> = await Axios({
            method: "DELETE",
            url: `/position/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status === 200 || response.data.success) {
            return response.data.data
        } else {
            throw new Error("oops")
        } 
    } catch (error) {
        
    }
}

export const GET_SINGLE_POSITION = async (id: string, token: string) => {
    try {
        const response: ApiResponse<Position> = await Axios({
            method: "GET",
            url: `/position/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status === 200 || response.data.success) {
            return response.data.data
        } else {
            throw new Error("oops")
        } 
    } catch (error) {
        
    }
}