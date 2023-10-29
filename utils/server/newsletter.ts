import Axios from "../axios"
import { ApiResponse, Enquiry, Position } from "@/types"

type NewsletterPayload = {
    title: string
    letter: string
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