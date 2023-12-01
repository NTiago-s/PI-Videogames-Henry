import Cards from '../../components/Cards/Cards'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllVideoGames, paginateGames } from '../../redux/Actions/actions';
import styles from './Home.module.css'
const Home = () => {
    const dispatch = useDispatch()

    const paginate = (event) => {
        dispatch(paginateGames(event.target.name));
    }

    useEffect(() => {
        dispatch(getAllVideoGames());
    }, []);
    return (
        <div className={styles.home}>
            <div>
                <Cards />
            </div>
            <div className={styles.button}>
                <button
                    name="prev"
                    onClick={paginate}>Prev
                </button>
                <button
                    name="next"
                    onClick={paginate}>Next
                </button>
            </div>
        </div>
    )
}

export default Home;