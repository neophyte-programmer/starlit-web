import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function EditPositionDialog({ data }: { data: any }) {
    console.log(data)

    return (
        <>
            <DialogHeader>
                <DialogTitle className="poppins">Create a Position</DialogTitle>
                <DialogDescription>
                    Create a new position for your executive team
                </DialogDescription>
            </DialogHeader>
        </>
    )
}

