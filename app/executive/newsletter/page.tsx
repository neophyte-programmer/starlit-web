import ViewSubscriberDialog from "@/components/dialogs/view-subscribers-dialog";
import CreateNewsletterForm from "@/components/forms/create-newsletter-form";

export default function NewletterPage() {
    return (
        <main className="mx-auto flex flex-col gap-8 max-w-4xl w-full">
            <ViewSubscriberDialog />
            <CreateNewsletterForm />
        </main>
    )
}