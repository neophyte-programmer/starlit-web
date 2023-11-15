"use client"
import ExecutiveInfoGraphics from "@/components/executive-info-graphics";
import ExecutivePosition from "@/components/executive-position";
import { useStateValue } from "@/context/StateProvider";
import { convertDate } from "@/lib/utils";

export default function ExecutiveDashboardPage() {
    const [{ user }] = useStateValue()

    return (
        <main>
            <div className="w-full flex flex-col md:flex-row gap-8  md:items-center md:justify-between ">
                <div className="flex flex-col">
                    <p className="tracking-tighter font-semibold text-2xl">
                        {user?.firstname || ""} {user?.lastname || ""} 
                    </p>
                    <p className="text-sm text-neutral-600">
                      <ExecutivePosition id={user?.position} />
                    </p>
                </div>
                <div className="text-sm text-neutral-600">
                    {
                        convertDate(new Date())
                         }
                </div>
            </div>
            <ExecutiveInfoGraphics />
        </main>
    )
}