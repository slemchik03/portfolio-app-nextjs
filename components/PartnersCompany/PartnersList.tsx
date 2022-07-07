import { useCallback, useEffect, useRef } from "react"
import { atom, selector, useRecoilState, useRecoilValue } from "recoil"
import downloadList from "../../lib/downloadList"
import PartnersListItem from "./PartnersListItem"

type Direction = "right" | "left"

interface PartnersBlockState {
    offset: number,
    direction: Direction
}

const partnersBlockState = atom<PartnersBlockState>({
    key: "PartnersOffset",
    default: {
        offset: 0,
        direction: "left"
    }
})

const partnersImagesState = selector<string[]>({
    key: "PartnersImagesState",
    get: async () => {
        const images = await downloadList("assets", "partners")
        return images
    }
})


export const PartnersList: React.FC = () => {
    const partnersImg = useRecoilValue(partnersImagesState)
    const [partnersBlock, setPartnersBlock] = useRecoilState(partnersBlockState)

    const ref = useRef<HTMLDivElement>(null)
    const partnersBlockMoveHandler = useCallback((partnersBlock: PartnersBlockState) => {
        const el = ref.current

        // --set direction--
        if (-el.offsetLeft + innerWidth >= el.offsetWidth && partnersBlock.direction !== "right") {
            console.log("right");
            setPartnersBlock({ ...partnersBlock, direction: "right" })
        } else if (partnersBlock.offset >= 0 && partnersBlock.direction !== "left") {
            console.log("left");
            setPartnersBlock({ ...partnersBlock, direction: "left" })
        }
        // ------
        // --change the offset--
        if (partnersBlock.direction === "right") {
            return setPartnersBlock((state) => ({ ...state, offset: state.offset + 10 }))
        }
        return setPartnersBlock((state) => ({ ...state, offset: state.offset - 10 }))
        // ------
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => partnersBlockMoveHandler(partnersBlock), 200)

        return () => {
            clearInterval(intervalId)
        }
    }, [partnersBlock])

    return (
        <div className="grid grid-flow-col relative space-x-5">
            <PartnersListItem ref={ref} images={partnersImg} offset={partnersBlock.offset} />
        </div>
    )
}