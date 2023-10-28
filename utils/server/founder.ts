import Axios from "../axios"
import { ApiResponse, FounderUser } from "@/types"

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