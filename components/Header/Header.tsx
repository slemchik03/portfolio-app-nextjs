import Image from "next/image"
import { MenuIcon } from "@heroicons/react/solid"
import Link from "next/link"
import { supabase } from "../../lib/supabaseClient"
import { useRouter } from "next/router"
import { useAuth } from "../../lib/hooks/useAuth"
import { motion } from "framer-motion"


export const Header: React.FC = () => {
    const session = useAuth()
    const router = useRouter()

    const clickAuthHandler = () => {
        if (session) {
            supabase.auth.signOut()
            router.reload()
        } else {
            router.push("/auth")
        }
    }

    return (
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} >
            <div className="py-5 sticky z-[100] top-0 bg-white shadow-md font-roboto">
                <div className="grid grid-flow-col justify-between container items-center">
                    <Link href={"/"}>
                        <a>
                            <Image src={"/images/logo.png"} width={"136px"}
                                height={"38px"} objectFit="cover" className="cursor-pointer" />
                        </a>
                    </Link>
                    <div className="hidden md:grid grid-flow-col items-center space-x-5 md:space-x-9 text-[18px] text-[#646A89]">

                        <a className="slider-effect" href="#">Products</a>
                        <a className="slider-effect" href="#">About us</a>
                        <a className="slider-effect" href="#">Contacts</a>
                        <a onClick={clickAuthHandler} className="btn-solid cursor-pointer">
                            {session ? "Logout" : "Login"}
                        </a>
                    </div>
                    <div className="flex cursor-pointer md:hidden">
                        <MenuIcon className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
