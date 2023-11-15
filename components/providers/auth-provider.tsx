"use client"
import { useStateValue } from '@/context/StateProvider'
import { GET_SESSION_USER } from '@/utils/server/auth'
import { useQuery } from "@tanstack/react-query"
import LoadingScreen from '../loaders/loading-screen'
import LoginForm from '../forms/login-form'

function GetSession({ children, type }: { children: React.ReactNode; type: "founder" | "executive" }) {
    const [{ user, role }, dispatch] = useStateValue()
    const { isPending, isError, data, error, isSuccess } = useQuery({
        queryKey: ['session-user'],
        queryFn: () => GET_SESSION_USER(type),
        retry: 0,
        staleTime: Infinity
    })

    if (isPending) {
        return <LoadingScreen />
    }

    if (isError || role !== type ) {

        return <LoginForm type={type} />
    }

    if (isSuccess) {
        dispatch({
            type: "SET_USER",
            payload: data,
        })
    }


    return (
        <>
            {children}
        </>
    )
}

export default function AuthProvider({ children, type }: { children: React.ReactNode; type: "founder" | "executive" }) {
    const [{ user, role }, dispatch] = useStateValue()


    
    if (user && role === type) {
        return children
    }
    
    return (
        <GetSession type={type}>
            {children}
        </GetSession>
    )
}