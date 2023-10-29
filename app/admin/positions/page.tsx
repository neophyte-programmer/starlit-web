"use client"
import AddPositionDialog from "@/components/dialogs/add-position-dialog"
import BouncingBalls from "@/components/loaders/bouncing-balls"
import { positionColumns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import { Button } from "@/components/ui/button"
import { useStateValue } from "@/context/StateProvider"
import { GET_ALL_EXECUTIVES } from "@/utils/server/executive"
import { GET_ALL_POSITIONS } from "@/utils/server/positions"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import toast from "react-hot-toast"

export default function PositionsPage() {
    const [{ user, positions }, dispatch] = useStateValue()

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['positions'],
        queryFn: async () => {
            if (user.token) {
                const positions = await GET_ALL_POSITIONS(user.token)
                return positions.data
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
        <>
            <div className="flex items-center justify-between">
                <AddPositionDialog />
            </div>
            <DataTable filterableCol="title" columns={positionColumns} data={data} title="positions" />
        </>
    )
}