interface BreadcrumbProps {
    bg: string
    title: string
    subtitle: string
}

export default function Breadcrumb({ bg, subtitle, title }: BreadcrumbProps) {
    return (
        <section className="min-h-[40vh] md:min-h-[50vh] w-full flex relative" style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: `#000`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "top"
        }}>
            <div className="absolute   top-0 w-full h-full bg-black/60 ">
                <div className="container gap-2 flex flex-col text-white justify-center  h-full">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-5xl font-semibold">
                    {title}
                    </h1> 
                    <p className="italic text-sm">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}