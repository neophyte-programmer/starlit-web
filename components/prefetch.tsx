"use client"

import { GET_ALL_PROJECTS } from "@/utils/server/project"
import { useQuery } from "@tanstack/react-query"

export default function Prefetch() {
    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const projects = await GET_ALL_PROJECTS()
            return projects.data
        },
        retry: 3,
        staleTime: 300,
        refetchOnMount: true
    })
    return <>
    </>
}