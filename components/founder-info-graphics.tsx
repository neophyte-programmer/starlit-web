"use client"
import { useStateValue } from "@/context/StateProvider"
import { GET_ALL_ENQUIRIES } from "@/utils/server/enquiry"
import { GET_ALL_EXECUTIVES } from "@/utils/server/executive"
import { GET_SUBSCRIBERS } from "@/utils/server/newsletter"
import { GET_ALL_POSITIONS } from "@/utils/server/positions"
import { GET_ALL_PROJECTS } from "@/utils/server/project"
import { useQuery } from "@tanstack/react-query"
import InfoCard from "./cards/info-card"
import { FaIdBadge, FaUserShield, FaUsers } from "react-icons/fa6"
import { IoMailUnreadSharp } from "react-icons/io5"
import { MdTask } from "react-icons/md"

export default function FounderInfoGraphics() {
    const [{ user }, dispatch] = useStateValue()

    const subscriberQuery = useQuery({
        queryKey: ['subscribers'],
        queryFn: async () => {
            if (user.token) {
                const subscribers = await GET_SUBSCRIBERS(user.token)
                return subscribers.data
            }
        },
    })
    const executiveQuery = useQuery({
        queryKey: ['executives'],
        queryFn: async () => {
            if (user.token) {
                const executives = await GET_ALL_EXECUTIVES(user.token)
                return executives.data
            }
        },
    })
    const enquiryQuery = useQuery({
        queryKey: ['enquiries'],
        queryFn: async () => {
            if (user.token) {
                const executives = await GET_ALL_ENQUIRIES(user.token)
                return executives.data
            }
        },
    })
    const positionQuery = useQuery({
        queryKey: ['positions'],
        queryFn: async () => {
            if (user.token) {
                const executives = await GET_ALL_POSITIONS(user.token)
                return executives.data
            }
        },
    })
    const projectQuery = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
                const executives = await GET_ALL_PROJECTS()
                return executives.data
        },
    })



    return (
        <section className="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <InfoCard
                label="Subscribers"
                data={subscriberQuery.data}
                error={subscriberQuery.isError}
                icon={<FaUsers />}
                pending={subscriberQuery.isPending}
            />
            <InfoCard
                label="Executives"
                data={executiveQuery.data}
                error={executiveQuery.isError}
                icon={<FaUserShield />}
                pending={executiveQuery.isPending}
            />
            <InfoCard
                label="Enquiries"
                data={enquiryQuery.data}
                error={enquiryQuery.isError}
                icon={<IoMailUnreadSharp />}
                pending={enquiryQuery.isPending}
            />
            <InfoCard
                label="Positions"
                data={positionQuery.data}
                error={positionQuery.isError}
                icon={<FaIdBadge />}
                pending={positionQuery.isPending}
            />
            <InfoCard
                label="Projects"
                data={projectQuery.data}
                error={projectQuery.isError}
                icon={<MdTask />}
                pending={projectQuery.isPending}
            />
        </section>
    )
}