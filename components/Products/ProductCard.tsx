import Image from "next/image"
import { FC } from "react"

interface Props {
    title: string,
    imgTitle: string,
    imgMain: string
}

export const ProductCard: FC<Props> = ({ imgTitle, title, imgMain }) => {
    return (
        <div className="grid grid-flow-row relative p-[60px] 
        rounded-lg shadow-xl font-roboto max-w-[530px] max-h-[538px] overflow-y-hidden">
            <div className="max-w-[220px] mb-[40px]">
                <Image width={"220px"} height={"35px"} objectFit={"contain"} src={imgTitle} className="w-0 h-0" />
            </div>
            <p className="text-[#3A3A3C] text-[18px] md:text-xl mb-[30px]">{title}</p>

            <button className="text-[#BF0830] text-[14px] md:text-[18px] font-semibold px-[24px] py-[12px] max-w-[145px] border-2 border-[#BF0830] rounded-xl">
                Learn more
            </button>

            <Image width={460} height={300} objectFit={"contain"} src={imgMain} />
        </div >
    )
}
