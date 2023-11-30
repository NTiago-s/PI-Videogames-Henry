import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ id, name, image, rating }) => {
    return (
        <div className={styles.cardContainer}>
            <div>
                <div className={styles.imgBox}>
                    <img src={image} alt={name} className={styles.img} />
                </div>
                <div>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <h2>ID: {id}</h2>
                            <h2>Name: {name}</h2>
                            <h2>rating: {rating}</h2>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <Link to={`/detail/${id}`}>
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;