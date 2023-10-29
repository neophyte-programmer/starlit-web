import { Project, ProjectSchema } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { convertDate } from "@/lib/utils";

export default function ProjectCard({ project: { date, _id, location, name, thumbnail,  } }: { project: ProjectSchema }) {
    return (
        <article className="w-full flex flex-col gap-4">
            <div className="aspect-square rounded-xl overflow-hidden relative">
                <Image src={thumbnail} alt="title" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold truncate">
                    {name}
                </h3>
                <p className="text-sm text-neutral-500">
                    {
                        convertDate(date)
                    }
                </p>

            </div>
            <Link href={`/projects/${_id}`}>
                <Button className="w-full" variant={"pink"}>
                    See More
                </Button>
            </Link>
        </article>
    )
}