interface BreadcrumbProps {
    bg: string
    title: string
    subtitle: string
}

export default function Breadcrumb({ bg, subtitle, title }: BreadcrumbProps) {
    return (
        <section className="min-h-[40vh] w-full flex relative" style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: `#000`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center"
        }}>
            <div className="absolute   top-0 w-full h-full bg-black/60 ">
                <div className="container flex flex-col text-white justify-center  h-full">
                    {title}

                </div>
            </div>
        </section>
    )
}