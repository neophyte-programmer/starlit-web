import { ServerCallback } from "@/types"
import Axios from "../axios"

export const GET_SESSION_USER = async (type : "founder" | "executive") => {
    try {
        const response = await Axios({
            method: "GET",
            url: `/auth/refresh?schema=${type}`
        })

        if (response.status === 200) {
            return response.data.json()
        } else {
            throw new Error("oops")
        }

    } catch (error: any) {
        throw new Error(error)
    }
}