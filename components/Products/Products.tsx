import { FC, useEffect, useState } from "react"
import { supabase } from "../../lib/supabaseClient"
import { ProductCard } from "./ProductCard"

interface Products {
    imgTitle: string,
    imgMain: string,
    describe: string
}

export const Products: FC = () => {
    const [products, setProducts] = useState<Products[]>([])

    const downloadProducts = async () => {
        const productsList = (await supabase.from("products").select("describe, imgMain, imgTitle")).data
        setProducts(productsList)
    }
    useEffect(() => {
        downloadProducts()
    }, [])

    return (
        <div className="grid grid-flow-row justify-center mt-[120px] mb-[108px] font-roboto">
            <div className="text-center">
                <h4 className="section-title">
                    Our line of products
                </h4>
                <p className="section-sub-title mb-[100px]">
                    Here’s what we’re building to help businesses
                    deliver amazing customer experiences.
                </p>
            </div>

            <div className="grid grid-flow-row xl:grid-cols-2  items-center justify-center gap-[32px]">
                {
                    products.map((product, index) => {
                        return (
                            <ProductCard
                                key={index}
                                imgMain={product.imgMain}
                                imgTitle={product.imgTitle}
                                title={product.describe}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}