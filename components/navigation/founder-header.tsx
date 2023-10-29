"use client"
import Image from "next/image";
import { APP_NAME } from "@/utils/constants";
import Link from "next/link";
import { useStateValue } from "@/context/StateProvider";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { BiCertification, BiCog, BiHomeAlt2 } from "react-icons/bi";
import { Menu } from "lucide-react";
import { BsActivity, BsNewspaper, BsPeople } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query"
import { LOGOUT_USER } from "@/utils/server/auth";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react"
import { usePathname } from "next/navigation";
import { getTitleFromPath } from "@/lib/utils";


const links = [
    {
        label: "Dashboard",
        icon: BiHomeAlt2,
        path: "/admin"
    },
    {
        label: "Newsletter",
        icon: BsNewspaper,
        path: "/admin/newsletter"
    },
    {
        label: "Contacts",
        icon: IoMailUnreadOutline,
        path: "/admin/contacts"
    },
    {
        label: "Projects",
        icon: BsActivity,
        path: "/admin/projects"
    },
    {
        label: "Positions",
        icon: BiCertification,
        path: "/admin/positions"
    },
    {
        label: "Users",
        icon: BsPeople,
        path: "/admin/users"
    },
    {
        label: "Settings",
        icon: BiCog,
        path: "/admin/settings"
    },
]



export default function FounderHeader() {
    const [{ user }, dispatch] = useStateValue()
    const pathname = usePathname()
   
    const title = getTitleFromPath(pathname)
    

    const logoutUser = useMutation({
        mutationFn: () => {
            return LOGOUT_USER("founder")
        }
    })

    const onLogout = () => {
        const toastSubmitId = toast.loading("Logging out")

        logoutUser.mutate(undefined, {
            onSuccess: (data) => {
                console.log(data);

                toast.success(`Logout Successful`, {
                    id: toastSubmitId
                })

                dispatch({
                    type: "SET_USER",
                    payload: null
                })

                if (typeof window !== "undefined") {
                    localStorage.clear()
                }
            },
            onError: (error: any) => {
                toast.error(error?.message || "Couldn't log you out", {
                    id: toastSubmitId
                })
                console.log(error);

            }
        })

    }

    return (
        <div className="border-b">
            <header className=" container w-full flex items-center justify-between p-2 md:p-4 ">
            <div className="flex items-center">
                <Link href="/">
                    <div className="-translate-y-[4px]">
                        <Image priority src="/images/logos/favi.png" alt="logo" width={35} height={40} className="aspect-square object-contain" />
                    </div>
                </Link>
                <p className="  text-lg font-medium capitalize">
                        {title}
                </p>
            </div>
            <div className="">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-full h-full">
                        <SheetHeader>
                            <h1 className="poppins font-semibold text-2xl">
                                Starlit Child Ghana
                            </h1>
                            <p className="text-neutral-500">
                                {user?.firstname} {user?.lastname}
                            </p>
                        </SheetHeader>
                        <div className="flex flex-col h-full items-start gap-4 mt-8 text-left py-4">
                            {
                                links.map(({ path, icon: Icon, label }) => (
                                    <SheetClose asChild key={path}>
                                        <Link href={path}>
                                            <div className="flex items-center text-neutral-600 gap-2 py-2">
                                                <Icon className="text-2xl" />
                                                <p className="text-lg">  {label}</p>
                                            </div>
                                        </Link>
                                    </SheetClose>
                                ))
                            }

                            <SheetClose asChild className="w-full">
                                <Button onClick={onLogout} disabled={logoutUser.isPending} className="w-full text-base" >
                                    {logoutUser.isPending && <Loader2 className="animate-spin h-4 w-4 mr-4" />}

                                    Logout
                                </Button>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
        </div>
    )
}