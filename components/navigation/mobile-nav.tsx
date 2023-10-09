import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Mail, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { BiHomeAlt2, BiInfoCircle, } from "react-icons/bi"
import { AiOutlineProject } from "react-icons/ai"
import { MdOutlineVolunteerActivism, MdMailOutline} from "react-icons/md"

const links = [
    {
        label: "Home",
        icon: BiHomeAlt2,
        path: "/"
    },
    {
        label: "About",
        icon: BiInfoCircle,
        path: "/about"
    },
    {
        label: "Our Projects",
        icon: AiOutlineProject,
        path: "/projects"
    },
    {
        label: "Donate",
        icon: MdOutlineVolunteerActivism,
        path: "/donate"
    },
    {
        label: "Contact",
        icon: MdMailOutline,
        path: "/contact"
    },

]

export default function MobileNav() {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="ghost">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-full">
                    <SheetHeader>
                        <SheetClose
                            className="flex h-full w-full select-none flex-col justify-center items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none "
                        >
                            <Image src="/images/logos/favi.png" alt="logo" width={80} height={40} className="aspect-square object-contain mx-auto" />
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg text-center font-medium">
                                Starlit Child Ghana
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                                Leaving beneficial impact in the lives of every child
                            </p>
                        </SheetClose>
                    </SheetHeader>
                    <div className="flex flex-col items-start gap-4 mt-8 text-left py-4">
                        {
                            links.map(({path, icon: Icon, label}) => (
                                <SheetClose asChild key={path}>
                                    <Link href={path}>
                                        <div className="flex items-center text-neutral-700 gap-2 py-2">
                                            <Icon className="text-2xl" />
                                            <p className="text-lg">  {label}</p>
                                        </div>
                                    </Link>
                                </SheetClose>
                            ))
                        }
                        
                        
                    </div>
                    <SheetFooter>

                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}