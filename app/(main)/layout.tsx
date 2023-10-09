import Header from '@/components/navigation/header'
import { APP_NAME } from '@/utils/constants'
import type { Metadata } from 'next'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <main className='container max-sm:px-4 '>
                <Header />
                {children}
            </main>
        </>
    )
}