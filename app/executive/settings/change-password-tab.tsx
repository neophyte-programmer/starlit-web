import ChangePasswordForm from "@/components/forms/change-password-form"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    TabsContent,
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
                    <ChangePasswordForm type="executive" />
                    
                </CardContent>
                
            </Card>
        </TabsContent>
    )
}