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
import { Position } from "@/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useStateValue } from "@/context/StateProvider"
import { DELETE_POSITION } from "@/utils/server/positions"
import toast from "react-hot-toast"
import { Loader2 } from "lucide-react"
import { useState } from "react"


export default function DeletePositionDialog({ data }: { data: Position; }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()


    const deletePosition = useMutation({
        mutationFn: () => {
            if (!user.token) {
                throw new Error("Please login again")
            }
            return DELETE_POSITION(data._id, user.token)
        },

        onSuccess: (deleted) => {
            queryClient.setQueryData(['positions'], (oldData: Position[]) => {
                return oldData ? oldData.filter((item) => item._id !== data._id) : oldData
            })
            toast.success("Deleted position successfully")
        },
        onError: (error: any) => {
            toast.error(error?.response?.data || "Couldn't create position. Try again later")

        }
    })

    function onSubmit() {
        // const toastSubmitId = toast.loading("Deleting position ...")

        deletePosition.mutate(undefined, {
            onSuccess: (data) => {
                toast.success(`Deleted position successfully`)
            },
            onError: (error: any) => {
                toast.error(error?.response?.data || "Couldn't create position. Try again later")
                console.log(error);
            }
        })
    }

    return (
        <>
            <DialogHeader>
                <DialogTitle className="poppins">Delete {data.title} Position</DialogTitle>
                <DialogDescription>
                    Confirm that you want to delete this position permanently.
                </DialogDescription>
            </DialogHeader>
            <div className="w-full flex items-center justify-end gap-4">
                <DialogClose asChild>
                    <Button disabled={deletePosition.isPending} variant="secondary">
                        Cancel
                    </Button>
                </DialogClose>
                <DialogClose asChild>

                    <Button onClick={onSubmit} variant="destructive" disabled={deletePosition.isPending} >
                        {deletePosition.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                        Delete
                    </Button>
                </DialogClose>

            </div>
        </>
    )
}

