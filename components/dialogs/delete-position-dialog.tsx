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

export default function DeletePositionDialog({ data }: { data: Position }) {


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
                    <Button variant="secondary">
                        Cancel
                    </Button>
                </DialogClose>
                <Button variant="destructive" >
                    Delete
                </Button>
            </div>
        </>
    )
}

