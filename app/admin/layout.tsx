import { APP_NAME } from '@/utils/constants'
import type { Metadata } from 'next'

export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            
            {children}
        </>
    )
  }