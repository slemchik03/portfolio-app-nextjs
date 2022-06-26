import { PartnersList } from "./PartnersList"

export const PartnersCompany: React.FC = () => {
    return (
        <div className="py-[100px] grid grid-flow-row  items-center text-center">
            <p className="text-[#1A2578] font-roboto text-2xl pb-[80px]">
                Over <b className="text-red-700">1.3 million</b> users and global brands trust us
            </p>
            <PartnersList />
        </div>
    )
}