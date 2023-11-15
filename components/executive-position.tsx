"use client"
import FounderInfoGraphics from "@/components/founder-info-graphics";
import { useStateValue } from "@/context/StateProvider";
import { convertDate } from "@/lib/utils";
import { GET_SINGLE_POSITION } from "@/utils/server/positions";
import { useQuery } from "@tanstack/react-query";

export default function ExecutivePosition({ id }: { id: string }) {
    const [{ user }] = useStateValue()

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ["user-position"],
        queryFn: async () => {
            if (user.token && (user.position || id)) {
                const position = await GET_SINGLE_POSITION(user.position, user.token)
                return position
            }

        },
        retry: 3,
        staleTime: 300,
        refetchOnMount: true
    })

    if (isPending || isError || data === undefined) {
        return "Position"
    }

    console.log(data)

    return (
        <>
            {data.title}
        </>
    )
}