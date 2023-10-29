import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExecutiveUsers from "./executive-users"
import FounderUsers from "./founder-users"



export default function UsersPage() {
    return (
        <>
            <Tabs defaultValue="executive" className="w-full">
                <TabsList>
                    <TabsTrigger value="executive">Executives</TabsTrigger>
                    <TabsTrigger value="founder">Founders</TabsTrigger>
                </TabsList>

                <ExecutiveUsers />
                <FounderUsers />
            </Tabs>

        </>
    )
}