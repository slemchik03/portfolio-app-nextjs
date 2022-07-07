import { useRouter } from "next/router"
import { FC, ReactNode, useEffect, useState } from "react"
import { useAuth } from "../../lib/hooks/useAuth"

interface Props {
    pageAccess: "public" | "protected"
    children: ReactNode
}

export const AuthCheck: FC<Props> = ({ children, pageAccess }) => {
    const [isMounted, setMounted] = useState(false) // fix react 18 error "Hydratation failed..."
    const session = useAuth()
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (router.isReady && pageAccess !== "public" && !session) {
            router.push("/auth")
        }
    }, [router, session])

    return (
        <>
            {
                isMounted && (
                    (session || pageAccess === "public") && children
                )
            }
        </>
    )
}