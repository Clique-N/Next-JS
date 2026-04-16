import { Travel } from "@/types/Types"
import Card from "../DestinationCard"
import styles from "./Grid.module.css"

type Props ={
    travels: Travel[]
}

const Grid = ({travels} : Props) => {

    return (
        <section className={styles.grid}>
            {travels.map(travel => <Card key={travel.id} travel={travel}/>)}
        </section>
    )
}

export default Grid;