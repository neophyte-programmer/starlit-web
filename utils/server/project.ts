import Axios from "../axios"
import { ApiResponse, Media, ProjectSchema } from "@/types"

export const GET_ALL_PROJECTS = async (token: string) => {
    try {
        const response: ApiResponse<ProjectSchema[]> = await Axios({
            method: "GET",
            url: `/project`,
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

export const GET_SINGLE_PROJECT = async (id: string, token: string) => {
    try {
        const response: ApiResponse<ProjectSchema> = await Axios({
            method: "GET",
            url: `/project/${id}`,
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

export const CREATE_PROJECT = async (info: Pick<ProjectSchema, "date" | "thumbnail" | "name" | "location" | "description">, token: string) => {
    try {
        const response: ApiResponse<ProjectSchema> = await Axios({
            method: "POST",
            url: `/project`,
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

export const UPDATE_PROJECT_DETAILS = async (id: string, info: Pick<ProjectSchema, "date" | "thumbnail" | "name" | "location" | "description">, token: string) => {
    try {
        const response: ApiResponse<ProjectSchema> = await Axios({
            method: "PUT",
            url: `/project/details/${id}`,
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

export const REMOVE_PROJECT_PICTURE = async (id: string, info: string, token: string) => {
    try {
        const response: ApiResponse<ProjectSchema> = await Axios({
            method: "PATCH",
            url: `/project/remove-picture/${id}`,
            data: {
                pictureId: info
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
    }
}

export const ADD_PROJECT_PICTURE = async (id: string, info: Media, token: string) => {
    try {
        const response: ApiResponse<ProjectSchema> = await Axios({
            method: "PATCH",
            url: `/project/add-picture/${id}`,
            data: {
                picture: info
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
    }
}

export const REMOVE_PROJECT_VIDEO = async (id: string, info: Media, token: string) => {
    try {
        const response: ApiResponse<ProjectSchema> = await Axios({
            method: "PATCH",
            url: `/project/remove-video/${id}`,
            data: {
                videoId: info
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
    }
}

export const ADD_PROJECT_VIDEO = async (id: string, info: Media, token: string) => {
    try {
        const response: ApiResponse<ProjectSchema> = await Axios({
            method: "PATCH",
            url: `/project/add-video/${id}`,
            data: {
                video: info
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
    }
}


export const DELETE_PROJECT = async (id: string, token: string) => {
    try {
        const response: ApiResponse<ProjectSchema[]> = await Axios({
            method: "DELETE",
            url: `/project/${id}`,
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