import { Travel } from "@/types/Types"
import styles from "./DestinationCard.module.css"
import Link from "next/link"

type Props ={
    travel: Travel
}

const Card = ({travel}: Props) => {
    
    const {id, route, image, description, price} = travel;

    return(
        <div className={styles.card} key={id}>
            <Link href={`/viagens/${id}`}>
                <img className={styles.card__img} src={image} alt={`Imagem do destino ${route}`} width={300} height={200}/>
                <div className={styles.card__info}>
                    <h3 className={styles.card__title}>{route}</h3>
                    <p className={styles.card__description}>{description}</p>
                    <p className={styles.card__price}>R$ {price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;