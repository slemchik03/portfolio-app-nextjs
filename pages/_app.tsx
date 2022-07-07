import { AppProps } from "next/app"
import "../styles/global.css"
import "../styles/fonts.css"
import { AuthCheck } from "../components/Auth/AuthCheck"
import { AuthProvider } from "../lib/AuthProvider"
import NextPageWithLayout from "../lib/types/NextPageWithLayout"
import { RecoilRoot } from "recoil"

interface AppPropsCustom extends AppProps {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsCustom) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <RecoilRoot>
            <AuthProvider>
                <AuthCheck pageAccess={Component.access}>
                    {getLayout(<Component {...pageProps} />)}
                </AuthCheck>
            </AuthProvider>
        </RecoilRoot>
    )
}