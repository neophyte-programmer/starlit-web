import Footer from '@/components/navigation/footer'
import Header from '@/components/navigation/header'

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex flex-col'>
            <main className=' '>
                <Header />
                {children}
            </main>
            <Footer />
        </div>
    )
}