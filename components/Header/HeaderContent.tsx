import Image from "next/image"
import Link from "next/link"
import { supabase } from "../../lib/supabaseClient"
import { MenuIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { memo } from "react"
import { Session } from "@supabase/supabase-js"

interface Props {
    session: Session
}

const HeaderContent: React.FC<Props> = memo(({ session }) => {
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
    )
})

export default HeaderContent