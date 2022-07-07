import { Session } from "@supabase/supabase-js"
import { createContext, FC, ReactNode, useEffect, useState } from "react"
import { supabase } from "./supabaseClient"


export const AuthProviderContext = createContext<Session>(null)

interface Props {
    children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
    const [session, setSession] = useState(supabase.auth.session())

    useEffect(() => {
        supabase.auth.onAuthStateChange((_, session) => {
            setSession(session)
        })
    }, [])

    return (
        <AuthProviderContext.Provider value={session}>
            {
                children
            }
        </AuthProviderContext.Provider>
    )
}