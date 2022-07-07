import { motion } from "framer-motion"
import Image from "next/image"
import { forwardRef } from "react"

interface Props {
    images: string[],
    offset: number
}


const PartnersListItem = forwardRef<HTMLDivElement, Props>(({ images, offset }, ref) => {
    return (
        <>
            <motion.div initial={{ left: 0 }} animate={{ left: offset + "px" }} transition={{ ease: "linear" }} ref={ref} className="grid space-x-10 grid-flow-col absolute">
                {
                    images.map((partnerImg, index) => {
                        return (
                            <p className="min-w-[115px] min-h-[28px]" key={index}>
                                <Image width="115px" height="28px" src={partnerImg} />
                            </p>
                        )
                    })
                }
            </motion.div>

        </>

    )
})

export default PartnersListItem