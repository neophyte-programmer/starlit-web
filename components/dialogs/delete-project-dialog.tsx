"use client"
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useStateValue } from "@/context/StateProvider"
import { ProjectSchema } from "@/types";
import { DELETE_PROJECT } from "@/utils/server/project";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

export default function DeleteProjectDialog({ data }: { data: ProjectSchema }) {
    const queryClient = useQueryClient()
    const [{ user }, dispatch] = useStateValue()
    const router = useRouter()

    const deleteProject = useMutation({
        mutationFn: () => {
            if (!user.token) {
                throw new Error("Please login again")
            }
            return DELETE_PROJECT(data._id, user.token)
        },

        onSuccess: (deleted) => {
            queryClient.setQueryData(['projects'], (oldData: ProjectSchema[]) => {
                return oldData ? oldData.filter((item) => item._id !== data._id) : oldData
            })
            toast.success("Deleted project successfully")
            router.push("/admin/projects")
        },
        onError: (error: any) => {
            toast.error(error?.response?.data || "Couldn't delete project. Try again later")
        }
    })

    function onSubmit() {
        deleteProject.mutate(undefined)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="ml-auto" variant="destructive">
                    Delete Project
                </Button>
            </DialogTrigger>
            <DialogContent>
            <DialogHeader>
                <DialogTitle className="poppins">Delete {data.name} project</DialogTitle>
                <DialogDescription>
                    Confirm that you want to delete this position permanently.
                </DialogDescription>
            </DialogHeader>
            <div className="w-full flex items-center justify-end gap-4">
                <DialogClose asChild>
                    <Button disabled={deleteProject.isPending} variant="secondary">
                        Cancel
                    </Button>
                </DialogClose>
                <DialogClose asChild>

                    <Button onClick={onSubmit} variant="destructive" disabled={deleteProject.isPending} >
                        {deleteProject.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}
                        Delete
                    </Button>
                </DialogClose>

            </div>
            </DialogContent>
        </Dialog>
    )
}