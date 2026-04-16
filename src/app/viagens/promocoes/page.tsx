import Title from "@/app/components/Title";
import DealsGrid from "@/app/components/DealsGrid";
import { dealsTravels } from "@/lib/travels";

const FlightDeals = () => {

    return (
        <>
            <Title title="Promoções para sócios 2Travel"/>
            <DealsGrid dealsTravels={dealsTravels}/>
        </>
    )
}

export default FlightDeals;