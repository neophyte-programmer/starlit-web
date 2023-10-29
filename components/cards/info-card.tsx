
interface Props {
    icon: React.ReactNode
    label: string
    pending: boolean,
    error: boolean
    data: any
}

export default function InfoCard({ icon, pending, error, data, label }: Props) {
    return (
        <article className="flex items-center bg-muted shadow-lg border rounded-lg justify-between gap-4 relative p-4">
            <div className="flex flex-col text-4xl">
                {
                    pending || error || data === undefined ? <p>0</p> : <p>{data.length}</p>
                }
                <p className="text-base">
                    {label}
                </p>
            </div>
            <p className="text-starlit-pink text-4xl">
                {icon}
            </p>

        </article>
    )
}