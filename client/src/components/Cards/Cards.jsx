import { useSelector } from 'react-redux'
import Card from '../Card/Card';
import styles from "./Cards.module.css";
const Cards = () => {
    const videoGames = useSelector((state) => state.videoGames);
    return (
        <div className={styles.boxCards}>
            {
                videoGames.map((char) => {
                    return <Card
                        image={char.image}
                        id={char.id}
                        key={char.id}
                        name={char.name}
                        genres={char.genres}
                        plataforms={char.plataforms}
                        release={char.release}
                        rating={char.rating}
                        description={char.description}
                    />
                })
            }
        </div>
    );
}

export default Cards;
