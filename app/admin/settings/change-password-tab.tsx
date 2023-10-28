import ChangePasswordForm from "@/components/forms/change-password-form"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function ChangePasswordTab() {
    return (
        <TabsContent value="password">
            <Card>
                <CardHeader>
                    <CardTitle className="poppins">Password</CardTitle>
                    <CardDescription>
                        Change your password here. After saving, you&apos;ll be logged out.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <ChangePasswordForm type="founder" />
                    
                </CardContent>
                
            </Card>
        </TabsContent>
    )
}