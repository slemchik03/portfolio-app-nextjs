import { motion, useViewportScroll } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"


const initialProps = {
    translateX: 1000,
    translateY: 0
}

const animateProps = {
    translateX: 0,
    translateY: 0
}

const Awards: React.FC = () => {
    const [visible, setVisible] = useState(false)
    const scroll = useViewportScroll()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scroll.scrollY.onChange((n) => {
            if (n - ref.current?.offsetTop >= -290) {
                return setVisible(true)
            }
        })
    }, [])

    return (
        <div ref={ref} className="bg-[url('/images/awards-bg.png')] bg-cover py-[250px]">
            <div className="container grid grid-flow-row justify-center items-center xl:grid-flow-col xl:justify-between ">
                <div className="max-w-[400px] xl:ml-[126px] text-center pb-10 xl:text-left xl:pb-0">
                    <p className="section-title">Creators of award-winning products</p>
                    <p className="section-sub-title">
                        Our products are loved by customers and recommended by leading industry experts.
                    </p>
                </div>
                <div className="relative w-[400px] h-[200px]">
                    <motion.div initial={initialProps} animate={visible ? animateProps : {}} className="award right-[170px] top-0">
                        <Image width={189} height={178} src="/images/award-img-1.png" />
                    </motion.div>
                    <motion.div initial={initialProps} animate={visible ? animateProps : {}} transition={{ delay: 0.4 }} className="award right-[200px] top-[192px]">
                        <Image width={189} height={178} src="/images/award-img-2.png" />
                    </motion.div>
                    <motion.div initial={initialProps} animate={visible ? animateProps : {}} transition={{ delay: 0.8 }} className="award right-[10px] top-[50px]">
                        <Image width={189} height={178} src="/images/award-img-3.png" />
                    </motion.div>
                    <motion.div initial={initialProps} animate={visible ? animateProps : {}} transition={{ delay: 1.4 }} className="award right-[20px] top-[190px]">
                        <Image width={189} height={178} src="/images/award-img-4.png" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Awards