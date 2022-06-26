import { useRouter } from "next/router"
import { useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import { Auth } from '@supabase/ui'
import { useAuth } from "../lib/hooks/useAuth"
import NextPageWithLayout from "../lib/types/NextPageWithLayout"
import { Layout } from "../components/Layout/Layout"

const AuthBasic: NextPageWithLayout = () => {
    const router = useRouter()
    const session = useAuth()

    useEffect(() => {
        if (router.isReady && session) {
            router.push("/")
        }
    }, [session])

    return (
        <div className="max-w-[350px] mx-auto">
            <Auth supabaseClient={supabase} />
        </div>
    )
}

AuthBasic.access = "public"
AuthBasic.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default AuthBasic