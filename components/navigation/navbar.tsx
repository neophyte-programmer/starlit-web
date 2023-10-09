"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"

import { FaInfoCircle } from "react-icons/fa"
import { IoLibrarySharp } from "react-icons/io5"
import { BsBookmarkFill, BsFillPeopleFill, BsFillPersonCheckFill, BsShieldFill, BsFillPatchCheckFill } from "react-icons/bs"
import { Button } from "../ui/button"
import { Mail } from "lucide-react"


const components: { title: string; href: string; description: string, icon: React.ReactNode }[] = [
    {
        icon: <FaInfoCircle />,
        title: "About Starlit",
        href: "/about",
        description:
            "Learn more about who we are",
    },
    {
        icon: <IoLibrarySharp className="text-green-500" />,
        title: "Our History",
        href: "/about#history",
        description:
            "Read about how we came to be",
    },
    {
        icon: <BsFillPatchCheckFill className="text-starlit-gold" />,
        title: "What we do",
        href: "/about#what-we-do",
        description:
            "Our activities, agendas and projects",
    },
    {
        icon: <BsFillPersonCheckFill className="text-lg text-starlit-pink" />,
        title: "Our Founders",
        href: "/about#founders",
        description: "A look into our founding members",
    },
    {
        icon: <BsFillPeopleFill className="text-lg text-starlit-blue" />,
        title: "The Team",
        href: "/about#team",
        description:
            "Meet the board members and advisors",
    },
    
]

export default function Navbar() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Image src="/images/logos/favi.png" alt="logo" width={80} height={40} className="aspect-square object-contain" />
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Starlit Child Ghana
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Leaving beneficial impact in the lives of every child
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem icon={<BsShieldFill className="text-starlit-pink" />} href="/#motto" title="Motto">
                                Read about what we stand for.
                            </ListItem>
                            <ListItem icon={<BsBookmarkFill className="text-starlit-blue" />} href="/#core-values" title="Core Values">
                                The core values that drives our organization.
                            </ListItem>
                            <ListItem icon={<BsFillPeopleFill className="text-lg text-starlit-gold" />} href="/#partners" title="Partners">
                                People we work with in Starlit Child
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-2 p-4  md:w-[300px] lg:grid-cols-2 lg:w-[500px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    icon={component.icon}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/projects" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Our Projects
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/donate" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Donate
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button variant="pink">
                        <Link href="/contact" legacyBehavior passHref>
                            <div className="flex items-center ">
                                <Mail className="mr-2 h-4 w-4"  />
                                Contact
                            </div>
                        </Link>
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    className?: string;
    title: string;
    icon?: React.ReactNode; // Icon prop of type React.ReactNode
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, icon, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm flex items-center font-medium leading-none">
                        {icon && <div className="mr-1">{icon}</div>}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
