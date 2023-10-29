import axios from "axios"

const Axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_LOCAL_URL,
    withCredentials: true
})

export default Axios