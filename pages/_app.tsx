import { AppProps } from "next/app"
import "../styles/global.css"
import "../styles/fonts.css"
import { AuthCheck } from "../components/Auth/AuthCheck"
import { ThemeProvider } from "next-theme"
import { Layout } from "../components/Layout/Layout"
import { AuthProvider } from "../lib/AuthProvider"
import NextPageWithLayout from "../lib/types/NextPageWithLayout"

interface AppPropsCustom extends AppProps {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsCustom) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <ThemeProvider attribute="class">
            <AuthProvider>
                <AuthCheck pageAccess={Component.access}>
                    {getLayout(<Component {...pageProps} />)}
                </AuthCheck>
            </AuthProvider>
        </ThemeProvider>
    )
}