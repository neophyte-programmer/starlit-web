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
import AddPositionForm from "../forms/add-position-form"
import { useState } from "react"


export default function AddPositionDialog() {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="ml-auto">
                    Add Position
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="poppins">Create a Position</DialogTitle>
                    <DialogDescription>
                        Create a new position for your executive team
                    </DialogDescription>
                </DialogHeader>
                <AddPositionForm onChange={setOpen} />
            </DialogContent>
        </Dialog>

    )
}