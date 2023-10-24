"use client"
import { useStateValue } from '@/context/StateProvider'
import { GET_SESSION_USER } from '@/utils/server/auth'
import { useQuery} from "@tanstack/react-query"
import LoadingScreen from '../loaders/loading-screen'
import LoginForm from '../forms/login-form'

export default function AuthProvider({ children, type }: { children: React.ReactNode; type: "founder" | "executive" }) {

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['session-user'],
        queryFn: () => GET_SESSION_USER(type),
        retry: 0,
        staleTime: Infinity
    })

    if (isPending) {
        return <LoadingScreen />
    }

    if (isError) {
        return <LoginForm />
    }

    return (
        <>
            {children}
        </>
    )
}