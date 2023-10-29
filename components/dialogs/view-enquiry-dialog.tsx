import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Enquiry, Position } from "@/types"
import { convertDate } from "@/lib/utils"
import Link from "next/link"

export default function ViewEnquiryDialog({ data }: { data: Enquiry }) {
    const { _id, createdAt, message, title, updatedAt, fullname, email } = data


    return (
        <>
            <DialogHeader>
                <DialogTitle className="poppins"> {title} </DialogTitle>
                <DialogDescription>
                    From {fullname} - {email}
                </DialogDescription>
            </DialogHeader>
            <div>
                {message}
            </div>
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
            <Link className="ml-auto" href={`mailto:${email}`}>
                <Button>
                    Reply Message
                </Button>
            </Link>
        </>
    )
}

