import AuthProvider from '@/components/providers/auth-provider'
import { APP_NAME } from '@/utils/constants'
import type { Metadata } from 'next'

export default function ExecutiveLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <AuthProvider type="executive"  >
            
            {children}
        </AuthProvider>
      </>
    )
  }