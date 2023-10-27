import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function UsersPage() {
    return (
        <>
            <Tabs defaultValue="executive" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="executive">Executives</TabsTrigger>
                    <TabsTrigger value="founder">Founders</TabsTrigger>
                </TabsList>
                <TabsContent value="executive">Make changes to your executive here.</TabsContent>
                <TabsContent value="founder">Change your founder here.</TabsContent>
            </Tabs>

        </>
    )
}