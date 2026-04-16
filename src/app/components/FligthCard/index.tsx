import { CarouselDest } from "@/types/Types"
import styles from "./FligthCard.module.css"
import Link from "next/link"

type Props ={
    hotDest: CarouselDest
}

const FlightCard = ({hotDest}: Props) => {

    const {id, route, image} = hotDest;

    return(
        <div className={styles.flight__card}>
            <Link href={`/viagens/${id}`}>
                <img className={styles.flight__img} src={image} alt={`Imagem do destino ${route}`}/>
                <div className={styles.flight__overlay}>
                    <h3 className={styles.flight__text}>Destino <br></br>{route}</h3>
                </div>
            </Link>
        </div>
    );
}

export default FlightCard;