import { CoreValue } from "@/types"

interface CoreValueCardProps {
    value: CoreValue
}

export default function CoreValueCard({ value }: CoreValueCardProps) {
    const { desc, icon: Icon, title} = value
    return (
        <article className="flex flex-col lg:text-base text-sm gap-4 items-center justify-center ">
            <Icon className="text-5xl text-starlit-pink" />
            <p className="text-xl font-semibold">{title}</p>
            <p className="max-sm:w-[90%] text-center">
                {desc}
            </p>
        </article>
    )
}