"use client"
import AddExecutiveDialog from "@/components/dialogs/add-executive-dialog"
import BouncingBalls from "@/components/loaders/bouncing-balls"
import { executiveColumns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useStateValue } from "@/context/StateProvider"
import { GET_ALL_EXECUTIVES } from "@/utils/server/executive"
import { useQuery } from "@tanstack/react-query"
import { redirect } from "next/navigation"
import toast from "react-hot-toast"



export default function ExecutiveUsers() {

    const [{ user }, dispatch] = useStateValue()

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['executives'],
        queryFn: async () => {
            if (user.token) {
                const executives = await GET_ALL_EXECUTIVES(user.token)
                return executives.data
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
        <TabsContent value="executive" className="w-full">
            <div className="flex items-center justify-between">
                <AddExecutiveDialog />
            </div>

            <DataTable filterableCol="email" columns={executiveColumns} data={data} title="executives" />
        </TabsContent>

    )
}