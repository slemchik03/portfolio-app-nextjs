import { ReactComponentElement, ReactElement } from 'react';
import { NextPage } from 'next';

type NextPageWithLayout<P = {}> = NextPage<P> & {
    access: "protected" | "public",
    getLayout?: (page: ReactElement) => ReactNode
}
export default NextPageWithLayout