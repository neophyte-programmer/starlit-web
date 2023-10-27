"use client"

import { ExecutiveUser, Position } from "@/types"
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
import ViewExecutiveDialog from "../dialogs/view-executive-dialog"
import BlockExecutiveDialog from "../dialogs/block-executive-dialog"
import UnblockExecutiveDialog from "../dialogs/unblock-executive-dialog"

const actionsMap = {
    edit: (
        <div className="flex items-center gap-2 ">
            <BiSolidEdit className="text-xl" />
            Edit
        </div>
    ),
    status: (
        <div className="flex items-center gap-2 ">
            <BiSolidEdit className="text-xl" />
            Change Status
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
    block: (<div className="flex items-center gap-2 ">
        <BiTrashAlt className="text-xl" />
        Block
    </div>),
    unblock: (<div className="flex items-center gap-2 ">
        <BiTrashAlt className="text-xl" />
        Unblock
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

export const executiveColumns: ColumnDef<ExecutiveUser>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ row }) => (
            <>
                {row.original.firstname} {row.original.lastname}
            </>
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Email" />
        ),
    },
    {
        accessorKey: "position",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Position" />
        ),
        cell: ({ row }) => {
            console.log(typeof row.original.position, row.original)
            return (
                <>
                    {row.original.position.title}
                </>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            console.log(typeof row.original.position, row.original)
            return (
                <div className="capitalize">
                    {row.original.status}
                </div>
            )
        },
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

                        <DialogItem triggerChildren={actionsMap.view}>
                            <ViewExecutiveDialog data={row.original} />
                        </DialogItem>

                        {
                            row.original.blocked ? <DialogItem triggerChildren={actionsMap.unblock}>
                                <UnblockExecutiveDialog data={row.original} />
                            </DialogItem> : <DialogItem triggerChildren={actionsMap.block}>
                                <BlockExecutiveDialog data={row.original} />
                            </DialogItem>
                        }

                        <DialogItem triggerChildren={actionsMap.status}>
                            <ViewExecutiveDialog data={row.original} />
                        </DialogItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }

]