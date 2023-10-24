"use client"
import { StateProvider } from '@/context/StateProvider'
import reducer from '@/context/reducer'
import initialState from '@/context/initialState'

export default function ContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <StateProvider reducer={reducer} initialState={initialState}>
                {children}
            </StateProvider>
        </>
    )
}