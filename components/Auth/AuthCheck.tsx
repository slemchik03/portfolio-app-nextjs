import { useRouter } from "next/router"
import { FC, ReactNode, useEffect, useState } from "react"
import { useAuth } from "../../lib/hooks/useAuth"
import { RedirectingScreen } from "./RedirectingScreen"

interface Props {
    pageAccess: "public" | "protected"
    children: ReactNode
}

export const AuthCheck: FC<Props> = ({ children, pageAccess }) => {
    const [isSSR, setSSR] = useState(true) // fix react 18 error "Hydratation failed..."
    const session = useAuth()
    const router = useRouter()

    useEffect(() => {
        setSSR(false)
    }, [])

    useEffect(() => {
        if (router.isReady && pageAccess !== "public" && !session) {
            router.push("/auth")
        }
    }, [router, session])

    return (
        <>
            {!isSSR && (
                (!session && pageAccess !== "public") ?
                    <RedirectingScreen message="Redirecting to authentification page" /> :
                    children
            )}
        </>
    )
}