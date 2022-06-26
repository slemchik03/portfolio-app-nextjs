import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import downloadList from "../../lib/downloadList"

type OffsetDirection = "right" | "left"

export const PartnersList: React.FC = () => {
    const [partnersImg, setPartnersImg] = useState<string[]>([])
    const [offset, setOffset] = useState(0)
    const [offsetDirection, setOffsetDirection] = useState<OffsetDirection>("left")
    const imgBlockRef = useRef<HTMLDivElement>(null)

    const downloadPartners = async () => {
        setPartnersImg(await downloadList("assets", "partners"))
    }

    const imgBlockMoveHandler = () => {
        if (
            -imgBlockRef.current.offsetLeft + innerWidth >= imgBlockRef.current.offsetWidth
            &&
            offsetDirection !== "right"
        ) {
            setOffsetDirection("right")
        }
        if (offset >= 0) {
            setOffsetDirection("left")
        }
        if (offsetDirection === "right") {
            return setOffset(offset => offset + 5) // move to right
        }
        setOffset(offset => offset - 5) // move to left
    }

    useEffect(() => {
        downloadPartners()
    }, [])

    useEffect(() => {
        const intervalId = setInterval(imgBlockMoveHandler, 100)

        return () => {
            clearInterval(intervalId)
        }
    }, [offsetDirection, offset])

    return (
        <div className="grid grid-flow-col relative space-x-5">
            <div ref={imgBlockRef} className="grid space-x-10 grid-flow-col absolute transition-all duration-[200ms] ease-linear" style={{ left: offset + "px" }}>
                {
                    partnersImg.map((partnerImg, index) => {
                        return (
                            <p className="min-w-[115px] min-h-[28px]" key={index}>
                                <Image width="115px" height="28px" src={partnerImg} />
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}