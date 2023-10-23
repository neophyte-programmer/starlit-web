"use client"

import Breadcrumb from "@/components/navigation/breadcrumb";
import { projects } from "@/utils/data";
import { usePathname } from "next/navigation"
import { ref, listAll, getDownloadURL } from "firebase/storage"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { storage } from "@/firebase.config";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function ProjectSlugPage({ params: { projectSlug } }: { params: { projectSlug: string } }) {
    const currentProject = projects.filter((proj) => proj.slug === projectSlug)[0]

    const pictureslistRef = ref(storage, `projects/${projectSlug}/pictures`)
    const videoslistRef = ref(storage, `projects/${projectSlug}/videos`)

    const [pics, setPics] = useState<any>([])

    useEffect(() => {
        if (typeof window !== undefined) {
            if (projectSlug) {
                listAll(pictureslistRef)
                    .then((res) => {
                        const uniqueUrls = new Set(); // Use a Se
                        
                        res.prefixes.forEach((folderRef) => {
                            // All the prefixes under listRef.
                            // You may call listAll() recursively on them.
                        });
                        res.items.forEach((itemRef) => {
                            getDownloadURL(ref(storage, itemRef.fullPath)).then((url) => {
                                console.log(url);
    
                                if (!pics.includes(url)) {
                                    setPics((prevPics: string[]) => [...prevPics, url]);
                                }
                            })
    
                        });
                    }).catch((error) => {
                        // Uh-oh, an error occurred!
                    });
            }
        }
    }, []);

    useEffect(() => {
        console.log(pics);

    }, [pics]);

    return (
        <>
            <Breadcrumb bg={`/projects/${projectSlug}/pictures${currentProject.thumbnail}`} title={currentProject.title} subtitle="" />
            <main className="flex flex-col container py-8">
                <p>
                    {currentProject.description}
                </p>

                <Tabs defaultValue="pictures" className="w-full">
                    <TabsList>
                        <TabsTrigger value="pictures">Pictures</TabsTrigger>
                        <TabsTrigger value="videos">Videos</TabsTrigger>
                    </TabsList>
                    <TabsContent value="pictures">
                        <section className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {
                                pics && pics.length > 0 && pics.map((url: string, index: number) => (
                                    <div key={index} className="w-full relative aspect-square">

                                        <Image src={url} alt="" fill className="object-cover" />
                                    </div>
                                ))
                            }
                        </section>
                    </TabsContent>
                    <TabsContent value="videos">

                    </TabsContent>
                </Tabs>


            </main>
        </>
    )
}