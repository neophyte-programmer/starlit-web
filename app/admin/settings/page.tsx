import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import AccountTab from "./account-tab"
import ChangePasswordTab from "./change-password-tab"


export default function SettingsPage() {
    return (
        <section className="w-full h-full flex items-center justify-center">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <AccountTab />
                <ChangePasswordTab />
            </Tabs>
        </section>
    )
}