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
import { convertDate } from "@/lib/utils"

export default function ViewPositionDialog({ data }: { data: Position }) {
    const { _id, createdAt, description, title, updatedAt } = data


    return (
        <>
            <DialogHeader>
                <DialogTitle className="poppins">View {title} Position </DialogTitle>
                <DialogDescription>
                    {description}
                </DialogDescription>
            </DialogHeader>
            <div className="w-full flex m flex-col text-sm gap-2">
                <p className="text-xs uppercase">
                    Created At
                </p>
                <p>
                    {convertDate(createdAt)}
                </p>
            </div>
            <div className="w-full flex m flex-col text-sm gap-2">
                <p className="text-xs uppercase">
                    Updated At
                </p>
                <p>
                    {convertDate(updatedAt)}
                </p>
            </div>
        </>
    )
}

