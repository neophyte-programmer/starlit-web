import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import EditPositionForm from "../forms/edit-position-form"
import { Position } from "@/types"

export default function EditPositionDialog({ data }: { data: Position }) {
    console.log(data)

    return (
        <>
            <DialogHeader>
                <DialogTitle className="poppins">Edit {data.title} Position</DialogTitle>
                <DialogDescription>
                    Edit or modify an existing position
                </DialogDescription>
            </DialogHeader>
            <EditPositionForm data={data} />
        </>
    )
}

