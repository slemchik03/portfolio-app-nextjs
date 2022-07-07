import { motion, useViewportScroll } from "framer-motion"
import { useCallback, useEffect } from "react"
import { atom, useRecoilState } from "recoil"
import { useAuth } from "../../lib/hooks/useAuth"
import HeaderContent from "./HeaderContent"


const stickyHeaderState = atom<boolean>({
    key: "StickyHeader",
    default: true
})


export const Header: React.FC = () => {
    const session = useAuth()
    const [isSticky, setSticky] = useRecoilState(stickyHeaderState)
    const scroll = useViewportScroll()

    const onScrollHandler = useCallback((v: number) => {
        if (v >= scroll.scrollY.getPrevious()) {
            return setSticky(false)
        }
        setSticky(true)
    }, [])

    useEffect(() => {
        scroll.scrollY.onChange(onScrollHandler)
    }, [])

    return (
        <motion.div initial={{ y: -100 }} animate={{ y: isSticky ? 0 : -100 }} transition={{ delay: 0.1 }} className="py-5 sticky z-[100] top-0 bg-white shadow-md font-roboto">
            <HeaderContent session={session} />
        </motion.div >
    )
}
