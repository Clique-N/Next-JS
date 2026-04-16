import { CarouselDest } from "@/types/Types"
import FlightCard from "../FligthCard";
import styles from "./FlightContainer.module.css"

type Props ={
    hotDest: CarouselDest[]
}

const FligthContainer = ({hotDest}: Props) =>  {

    return (
        <section className={styles.container}>
            <div className={styles.flight}>
                {hotDest.map(Dest => <FlightCard key={Dest.id} hotDest={Dest}/>)}
            </div>
        </section>
    )

}

export default FligthContainer;