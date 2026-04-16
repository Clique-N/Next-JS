import { DealsTravel } from "@/types/Types"
import styles from "./DealsCard.module.css"
import Link from "next/link"

type Props ={
    deals: DealsTravel
}

const DealsCard = ({deals}: Props) => {
    
    const {id, route, image, description, oldPrice, newPrice} = deals;

    return(
        <div className={styles.deals} key={id}>
            <Link href={`/viagens/promocoes/${id}`}>
                <img className={styles.deals__img} src={image} alt={`Imagem do destino ${route}`} width={300} height={200}/>
                <div className={styles.deals__info}>
                    <h3 className={styles.deals__title}>{route}</h3>
                    <p className={styles.deals__description}>Saindo de: {description}</p>
                    <p className={styles.deals__oldPrice}>R$ {oldPrice}</p>
                    <p className={styles.deals__newPrice}>R$ {newPrice}</p>
                </div>
            </Link>
        </div>
    )
}

export default DealsCard;