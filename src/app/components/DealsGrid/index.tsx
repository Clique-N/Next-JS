import { DealsTravel } from "@/types/Types"
import DealsCard from "../DealsCard"
import styles from "./DealsGrid.module.css"

type Props ={
    dealsTravels: DealsTravel[]
}

const DealsGrid = ({dealsTravels} : Props) => {

    return (
        <section className={styles.deals__grid}>
            {dealsTravels.map(deals => <DealsCard key={deals.id} deals={deals}/>)}
        </section>
    )
}

export default DealsGrid;