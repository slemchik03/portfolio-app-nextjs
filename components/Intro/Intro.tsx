import { motion } from "framer-motion"
import Image from "next/image"


export const Intro: React.FC = () => {

    return (
        <div className="container font-roboto">
            <div className="grid grid-flow-row justify-center pt-[90px] pb-[50px] 
            md:justify-start md:grid-flow-col md:pt-[165px] md:pb-[100px]">
                <motion.div initial={{ x: -1000, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ ease: "easeInOut" }}>
                    <div className="grid grid-flow-row gap-7 text-left md:max-w-[512px]">

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
                </motion.div>
                <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ delay: 0.5 }}>
                    <div className="flex mt-20 md:mt-0 max-w-[600px] ">
                        <Image width="700px" height="600px" src="/images/intro-img.svg" />
                    </div>
                </motion.div>
            </div>
        </div>

    )
}