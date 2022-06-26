import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { supabase } from "../../lib/supabaseClient"

type OffsetDirection = "right" | "left"

export const PartnersList: React.FC = () => {
    const [partnersImg, setPartnersImg] = useState<string[]>([])
    const [offset, setOffset] = useState(innerWidth)
    const [offsetDirection, setOffsetDirection] = useState<OffsetDirection>("left")
    const imgBlockRef = useRef<HTMLDivElement>(null)

    const downloadPartners = async () => {
        try {
            const { data: partnersInfo } = await supabase
                .storage
                .from("assets")
                .list("partners")

            const result = Promise.all(partnersInfo.map(async ({ name }) => {
                const partner = await supabase
                    .storage
                    .from("assets")
                    .download(`partners/${name}`)

                return URL.createObjectURL(partner.data)
            }))

            setPartnersImg(await result)
        } catch (error) {
            console.log(error);
        }
    }

    const imgBlockMoveHandler = () => {
        if (
            -imgBlockRef.current.offsetLeft >= imgBlockRef.current.offsetWidth
            &&
            offsetDirection !== "right"
        ) {
            console.log("right");
            setOffsetDirection("right")
        }
        if (offset > innerWidth && offsetDirection !== "left") {
            console.log("left");

            setOffsetDirection("left")
        }
        if (offsetDirection === "right") {
            return setOffset(offset => offset + 15) // move to right
        }
        setOffset(offset => offset - 10) // move to left
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