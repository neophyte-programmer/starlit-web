"use client"

import { Position } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { convertDate } from "@/lib/utils"
import { DataTableColumnHeader } from "./data-table-column-header"
import { BsEye } from "react-icons/bs"
import { BiSolidEdit, BiTrashAlt } from "react-icons/bi"
import { useModal } from "@/hooks/use-modal-store"
import DialogItem from "../dialog-item"
import { DialogTitle } from "../ui/dialog"
import * as React from "react"
import DeletePositionDialog from "../dialogs/delete-position-dialog"
import EditPositionDialog from "../dialogs/edit-position-dialog"
import ViewPositionDialog from "../dialogs/view-position-dialog"

const actionsMap = {
    edit: (
        <div className="flex items-center gap-2 ">
            <BiSolidEdit className="text-xl" />
            Edit 
        </div>
    ),
    view: (<div className="flex items-center gap-2 ">
        <BsEye className="text-xl" />
        View 
    </div>),

    delete: (<div className="flex items-center gap-2 ">
        <BiTrashAlt className="text-xl" />
        Delete 
    </div>),
    
}

export const positionColumns: ColumnDef<Position>[] = [
    {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Created At" />
        ),
        cell: ({ row }) => {

            return <>
                {convertDate(row.getValue("createdAt"))}
            </>
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="cursor-pointer h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DialogItem triggerChildren={actionsMap.edit}>
                            <EditPositionDialog data={row.original} />
                        </DialogItem>
                        <DialogItem triggerChildren={actionsMap.view}>
                            <ViewPositionDialog data={row.original} />
                        </DialogItem>
                        <DialogItem triggerChildren={actionsMap.delete}>
                            <DeletePositionDialog data={row.original} />
                        </DialogItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }
]