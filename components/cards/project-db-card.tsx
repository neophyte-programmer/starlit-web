import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ProjectSchema } from "@/types"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"


export default function ProjectDBCard({ project }: { project: ProjectSchema }) {

    return (
        <Card>
            <CardContent className="md:p-6 p-4 ">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image src={project.thumbnail} alt={project.name} className="aspect-square object-cover" fill />
                </div>
                <p className="mt-2 text-lg font-semibold tracking-tight">
                    {project.name}
                </p>
                <CardDescription className="text-sm">
                    {project.description.slice(0, 99)} {project.description.length > 99 && "..."}
                </CardDescription>
                <div className="flex mt-4 items-center gap-4">

                    <Link className="w-full" href={`/admin/projects/edit/${project._id}`} >
                        <Button className="w-full">
                            Edit
                        </Button>
                    </Link>


                    <Link href={`/admin/projects/view/${project._id}`} >
                        <Button variant="secondary">
                            View
                        </Button>
                    </Link>

                </div>
            </CardContent>
        </Card>
    )
}