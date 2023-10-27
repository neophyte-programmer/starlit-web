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