import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExecutiveUser, } from "@/types"
import { convertDate } from "@/lib/utils"
import { IoMail } from "react-icons/io5"
import { BiSolidUserBadge } from "react-icons/bi"

export default function ViewExecutiveDialog({ data }: { data: ExecutiveUser }) {
    const { _id, createdAt, status, firstname, lastname, updatedAt, email, mobile, position, token } = data


    return (
        <>
            <DialogHeader>
                <DialogTitle className="poppins">View {firstname} {lastname} </DialogTitle>
                <DialogDescription className=" flex items-center gap-4">
                    <div className="flex items-center gap-2 lowercase">
                        <IoMail />
                        {email}
                    </div>
                    <div className="flex items-center gap-2 capitalize">
                        <BiSolidUserBadge />
                        <p>
                        {status} {position.title}
                        </p>
                    </div>

                    
                </DialogDescription>
            </DialogHeader>
            <div className="w-full flex m flex-col text-sm gap-2">
                <p className="text-xs uppercase">
                    Phone
                </p>
                <p>
                  {mobile}
                </p>
            </div>
            
            <div className="w-full flex m flex-col text-sm gap-2">
                <p className="text-xs uppercase">
                    Created At
                </p>
                <p>
                    {convertDate(createdAt)}
                </p>
            </div>
            <div className="w-full flex m flex-col gap-2">
                <p className="text-xs uppercase">
                    Created At
                </p>
                <p>
                    {convertDate(updatedAt)}
                </p>
            </div>
        </>
    )
}

