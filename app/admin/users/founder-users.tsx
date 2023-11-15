"use client"
import BouncingBalls from "@/components/loaders/bouncing-balls"
import { founderColumns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import {  TabsContent } from "@/components/ui/tabs"
import { GET_ALL_FOUNDERS } from "@/utils/server/founder"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"
import { useQuery } from "@tanstack/react-query"
import { useStateValue } from "@/context/StateProvider"


export default function FounderUsers() {
    const [{ user }, dispatch] = useStateValue()

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['founders'],
        queryFn: async () => {
            if (user.token) {
                const founders = await GET_ALL_FOUNDERS(user.token)
                return founders.data
            }

        },
        retry: 3,
        staleTime: 300,
        refetchOnMount: true
    })

    if (isPending) {
        return (<div className="w-full min-h-[60vh] flex items-center justify-center">
            <BouncingBalls />
        </div>)
    }

    if (isError || data === undefined) {
        toast.error("Something went wrong here")
        return redirect("/admin")
    }

   
    return (
        <TabsContent value="founder">
            <DataTable filterableCol="email" columns={founderColumns} data={data} title="founders" />
        </TabsContent>

    )
}