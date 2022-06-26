import { PartnersList } from "./PartnersList"

export const PartnersCompany: React.FC = () => {
    return (
        <div className="py-[100px] grid grid-flow-row items-center text-center">
            <p className="section-title pb-[80px]">
                Over <b className="text-red-700">1.3 million</b> users and global brands trust us
            </p>
            <PartnersList />
        </div>
    )
}