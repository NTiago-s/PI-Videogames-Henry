import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Card = ({ id, name, image, rating }) => {
    const [girar, setGirar] = useState(false);
    return (
        <div className={styles.container}>
            <div className={`animacion ${girar ? 'girar' : 'cardContainer'}`} onClick={() => setGirar(!girar)}>
                <div className={styles.imgBox}>
                    <img src={image} alt={name} className={styles.img} />
                </div>
                <div className={styles.moreInfo}>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <h2>Name: {name}</h2>
                            <h2>Rating: {rating}</h2>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <Link to={`/detail/${id}`} className={styles.link}>
                            More Info
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;