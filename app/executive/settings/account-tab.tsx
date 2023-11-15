import EditAccountForm from "@/components/forms/edit-account-form"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    TabsContent,
} from "@/components/ui/tabs"

export default function AccountTab() {
    return (
        <TabsContent value="account">
            <Card>
                <CardHeader>
                    <CardTitle className="poppins">Account</CardTitle>
                    <CardDescription>
                        Make changes to your account here. Click save when you&apos;re done.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <EditAccountForm type="founder" />
                </CardContent>

            </Card>
        </TabsContent>
    )
}