import Image from "next/image"
import { useEffect, useState } from "react"


export const Intro: React.FC = () => {
    const [isShowIntro, setShowIntro] = useState(false)

    useEffect(() => {
        setShowIntro(true)
    }, [])

    return (
        <div className="container font-roboto">
            <div className="grid grid-flow-row justify-center pt-[90px] pb-[50px] 
            md:justify-start md:grid-flow-col md:pt-[165px] md:pb-[100px]">
                <div className={`grid opacity-0 translate-x-[-1000px] 
                transition-all duration-500 ${isShowIntro ? "translate-x-0 opacity-100" : ""} 
                grid-flow-row gap-7 text-left md:max-w-[512px]`}>
                    <p className="text-[#484C63] text-center md:text-left text-md 
                    md:text-[20px] xl:text-[22px] ">
                        Our next-gen products empower businesses
                        to implement agility and accelerate growth.Our next-gen products empower businesses
                        to implement agility and accelerate growth
                    </p>
                    <div className="flex justify-center md:justify-start space-x-[16px] max-h-[58px]">
                        <button className="btn-solid">Learn more</button>
                        <button className="btn-outline">Work with us!</button>
                    </div>
                </div>
                <div className={`flex opacity-0 ${isShowIntro ? "opacity-100" : ""}
                  mt-20 md:mt-0 max-w-[600px] transition-all duration-[1500ms]`}>
                    <Image width="700px" height="600px" src="/images/intro-img.svg" />
                </div>
            </div>
        </div>

    )
}