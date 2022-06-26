import Image from "next/image";
import { FC } from "react";

interface Props {
    message?: string
}

export const RedirectingScreen: FC<Props> = ({ message }) => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <p className="font-roboto text-3xl text-[rgba(36,180,126)]">{message}</p>
            <Image className="bg-none" src={"/images/loading-spinner.svg"} width={"80px"} height={"80px"} />
        </div>
    )
}