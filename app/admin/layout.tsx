"use client"
import AuthProvider from '@/components/providers/auth-provider'
import LoadingScreen from '@/components/loaders/loading-screen'
import { useState, useEffect } from 'react'
import FounderHeader from '@/components/navigation/founder-header'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <LoadingScreen />
  }

  return (
    <>
      <AuthProvider type="founder"  >
        <FounderHeader />
        <main className='flex flex-col container py-4'>

          {children}
        </main>
      </AuthProvider>
    </>
  )
}