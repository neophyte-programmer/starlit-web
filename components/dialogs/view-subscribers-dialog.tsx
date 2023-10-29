"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import BouncingBalls from "../loaders/bouncing-balls"
import { GET_SUBSCRIBERS } from "@/utils/server/newsletter"
import { useQuery } from "@tanstack/react-query"
import { useStateValue } from "@/context/StateProvider"
import toast from "react-hot-toast"
import { redirect } from "next/navigation"



export default function ViewSubscriberDialog() {
    const [{ user }, dispatch] = useStateValue()

    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['subscribers'],
        queryFn: async () => {
            if (user.token) {
                const subscribers = await GET_SUBSCRIBERS(user.token)
                return subscribers.data
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
        <Dialog>
            <DialogTrigger asChild>
                <Button className="ml-auto">
                    View Subscribers
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="poppins">View Subscribers</DialogTitle>
                    <DialogDescription>
                        View all the existing subsribers to your newsletter
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[250px] flex flex-col gap-2">
                    {
                        data.map((sub: any) => (
                            <div key={sub._id}>
                                {sub.email}
                            </div>
                        ))
                    }
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}