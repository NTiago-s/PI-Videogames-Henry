import styles from './Card.module.css'
import { Link } from 'react-router-dom';

//* componente que renderiza las cartas
const Card = ({ id, name, image, genres, rating }) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgBox}>
                    <img src={image} alt={name} className={styles.img} />
                </div>
                <div className={styles.moreInfo}>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <h2>Name: {name}</h2>
                            <h2>Rating: {rating}</h2>
                            <h2>Genres: {genres?.map((genre, index) => <span className={styles.genreSpan} key={index}>{genre} </span>)}</h2>
                        </div>
                    </div>
                    <div className={styles.info}>
                        <Link to={`/detail/${id}`} className={styles.link}>
                            See more info
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;