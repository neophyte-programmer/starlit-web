import Axios from "../axios"
import { ApiResponse, Enquiry, Position } from "@/types"

export const GET_ALL_ENQUIRIES = async (token: string) => {
    try {
        const response: ApiResponse<Enquiry[]> = await Axios({
            method: "GET",
            url: `/enquiry`,
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
export const DELETE_ENQUIRY = async (id: string, token: string) => {
    try {
        const response: ApiResponse<Enquiry[]> = await Axios({
            method: "DELETE",
            url: `/enquiry/${id}`,
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

