import { dealsTravels } from "@/lib/travels";
import { notFound } from "next/navigation";
import styles from "./TravelDeals.module.css"

type Props = {
    params: Promise <{
        id: string
    }>
}

const DealsDetails = async ({params} : Props) => {

    const { id } = await params;

    const details = dealsTravels.find(travel => travel.id == id)

    if(!details)
        return notFound();

    const {route, image, description, oldPrice, newPrice} = details;

    return (
    <section className={styles.details__grid}>
        <div className={styles.details__card}>
            <img className={styles.details__img} src={image} alt={`Imagem do destino ${route}`}/>
        </div>
        <div className={styles.details__info}>
            <h2 className={styles.details__title}>{route}</h2>
            <p className={styles.details__description}>Saindo de: {description}</p>
            <p className={styles.details__oldPrice}>{oldPrice}</p>
            <p className={styles.details__newPrice}>{newPrice}</p>
            <button className={styles.details__button}>Escolher data</button>
        </div>
    </section>
    )
}

export default DealsDetails;