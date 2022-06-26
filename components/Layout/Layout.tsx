import NextNProgress from "nextjs-progressbar"
import React, { FC } from "react"
import { Header } from "../Header/Header"

interface Props {
    children?: React.ReactNode
}

export const Layout: FC<Props> = ({ children }) => {

    return (
        <div>
            <NextNProgress
                color="red"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />

            <Header />
            {
                children
            }

            {/* Footer */}
        </div>
    )
}