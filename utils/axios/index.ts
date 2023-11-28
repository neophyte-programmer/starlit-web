import axios from "axios"

const Axios = axios.create({
    baseURL: "https://starlit-server.onrender.com/api",
    withCredentials: true
})

export default Axios