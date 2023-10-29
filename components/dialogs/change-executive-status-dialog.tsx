import { ExecutiveUser } from "@/types";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import toast from "react-hot-toast"
import { useStateValue } from "@/context/StateProvider"
import { CHANGE_EXECUTIVE_STATUS } from "@/utils/server/executive";

export default function ChangeExecutiveStatusDialog({ data }: { data: ExecutiveUser; }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()

    const blockExecutive = useMutation({
        mutationFn: () => {
            if (!user.token || !data._id) {
                throw new Error("Please login again")
            }

            let status: "past" | "current" = data.status === "current" ? "past" : "current"
            return CHANGE_EXECUTIVE_STATUS(data._id, status, user.token)
        },

        onSuccess: (blocked) => {
            queryClient.setQueryData(['executives'], (oldData: ExecutiveUser[]) => {
                const removeOldPosition = oldData ? oldData.filter((item) => item._id !== data._id) : oldData

                return removeOldPosition ? [...removeOldPosition, blocked] : removeOldPosition

            })
            toast.success("Blocked executive successfully")
        },
        onError: (error: any) => {
            console.log(error);
            
            toast.error(error?.response?.data || "Couldn't block executive. Try again later")

        }
    })

    function onSubmit() {
        // const toastSubmitId = toast.loading("Deleting position ...")

        blockExecutive.mutate(undefined, {
            onSuccess: (data) => {
                toast.success(`Blocked executive successfully`)
            },
            onError: (error: any) => {
                toast.error(error?.response?.data || "Couldn't block executive. Try again later")
                console.log(error);
            }
        })
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle className="poppins">Modify {data.firstname} {data.lastname}&apos;s Status </DialogTitle>
                <DialogDescription>
                    Confirm that you want to change this user&apos;s status from {data.status} to {data.status === "current" ? "past" : "current"}
                </DialogDescription>
            </DialogHeader>
            <div className="w-full flex items-center justify-end gap-4">
                <DialogClose asChild>
                    <Button disabled={blockExecutive.isPending} variant="secondary">
                        Cancel
                    </Button>
                </DialogClose>
                <DialogClose asChild>

                    <Button onClick={onSubmit} variant="default" disabled={blockExecutive.isPending} >
                        {blockExecutive.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                        Change
                    </Button>
                </DialogClose>
            </div>
        </>
    )
}