import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";
import MobileNav from "./mobile-nav";

export default function Header() {
    return (
        <>
            <div className="flex items-center justify-between py-2 sm:p-4">
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <Image priority src="/images/logos/favi.png" alt="logo" width={50} height={40} className="aspect-square object-contain" />
                        <p className="font-semibold text-2xl mt-2 hidden tracking-tight lg:block ">
                            Starlit Child Ghana
                        </p>
                    </div>
                </Link>
                <Navbar />
                <MobileNav />
            </div>

            
        </>
    )
}