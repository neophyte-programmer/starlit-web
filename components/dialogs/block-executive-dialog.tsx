import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExecutiveUser } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useStateValue } from "@/context/StateProvider"
import toast from "react-hot-toast"
import { BLOCK_EXECUTIVE } from "@/utils/server/executive"
import { Loader2 } from "lucide-react"

export default function BlockExecutiveDialog({ data }: { data: ExecutiveUser; }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()

    const blockExecutive = useMutation({
        mutationFn: () => {
            if (!user.token || !data._id) {
                throw new Error("Please login again")
            }
            return BLOCK_EXECUTIVE(data._id, user.token)
        },

        onSuccess: (blocked) => {
            queryClient.setQueryData(['executives'], (oldData: ExecutiveUser[]) => {
                const removeOldPosition = oldData ? oldData.filter((item) => item._id !== data._id) : oldData

                return removeOldPosition ? [ ...removeOldPosition, blocked] : removeOldPosition
            
            })
            toast.success("Blocked executive successfully")
        },
        onError: (error: any) => {
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
                <DialogTitle className="poppins">Block {data.firstname} {data.lastname} </DialogTitle>
                <DialogDescription>
                    Confirm that you want to block this user. You can always unblock them later
                </DialogDescription>
            </DialogHeader>
            <div className="w-full flex items-center justify-end gap-4">
                <DialogClose asChild>
                    <Button disabled={blockExecutive.isPending} variant="secondary">
                        Cancel
                    </Button>
                </DialogClose>
                <DialogClose asChild>

                    <Button onClick={onSubmit} variant="destructive" disabled={blockExecutive.isPending} >
                        {blockExecutive.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                        Block
                    </Button>
                </DialogClose>

            </div>
        </>
    )
}