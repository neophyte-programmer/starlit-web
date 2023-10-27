import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Position } from "@/types"

export default function ViewPositionDialog({data}: {data: Position}) {
    

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

