import Head from "next/head"
import { Intro } from "../components/Intro/Intro"
import { Layout } from "../components/Layout/Layout"
import { PartnersCompany } from "../components/PartnersCompany/PartnersCompany"
import { Products } from "../components/Products/Products"
import Awards from "../components/Awards/Awards"
import NextPageWithLayout from "../lib/types/NextPageWithLayout"


const Home: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Home page</title>
            </Head>

            {/* Content */}
            <main>
                <div className="overflow-hidden">
                    <Intro />
                    <PartnersCompany />
                    <Products />
                    <Awards />
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
