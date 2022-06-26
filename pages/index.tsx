import Head from "next/head"
import { Intro } from "../components/Intro/Intro"
import { Layout } from "../components/Layout/Layout"
import { PartnersCompany } from "../components/PartnersCompany/PartnersCompany"
import NextPageWithLayout from "../lib/types/NextPageWithLayout"


const Home: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>

            {/* Content */}
            <main>
                <div className="bg-[url('/images/intro-bg.jpg')] bg-cover min-h-screen overflow-x-hidden">
                    <Intro />
                    <PartnersCompany />
                    <Products />
                </div>
            </main>
        </>
    )
}
Home.access = "protected"
Home.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Home
