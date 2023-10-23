import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProjectCard({ project: { date, slug, thumbnail, title } }: { project: Project }) {
    return (
        <article className="w-full flex flex-col gap-4">
            <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image src={`/projects/${slug}/pictures${thumbnail}`} alt="title" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold truncate">
                    {title}
                </h3>
                <p className="text-sm text-neutral-500">
                    {date}
                </p>

            </div>
            <Link href={`/projects/${slug}`}>
                <Button className="w-full" variant={"pink"}>
                    See More
                </Button>
            </Link>
        </article>
    )
}