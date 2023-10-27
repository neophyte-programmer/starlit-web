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
import { useState } from "react"
import AddExecutiveForm from "../forms/add-executive-form"

export default function AddExecutiveDialog() {
    const [open, setOpen] = useState(false)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="ml-auto">
                    Add Executive
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="poppins">Create an Executive</DialogTitle>
                    <DialogDescription>
                        Add a new executive to your team
                    </DialogDescription>
                </DialogHeader>
                <AddExecutiveForm onChange={setOpen} />
            </DialogContent>
        </Dialog>

    )
}