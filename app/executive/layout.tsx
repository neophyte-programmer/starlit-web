"use client"
import LoadingScreen from '@/components/loaders/loading-screen'
import { useState, useEffect } from 'react'
import AuthProvider from '@/components/providers/auth-provider'
import { APP_NAME } from '@/utils/constants'
import type { Metadata } from 'next'
import ExecutiveHeader from '@/components/navigation/executive-header'

export default function ExecutiveLayout({
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
      <AuthProvider type="executive"  >
        <ExecutiveHeader />
        <main className='flex flex-col container py-4'>
          {children}
        </main>
      </AuthProvider>
    </>
  )
}