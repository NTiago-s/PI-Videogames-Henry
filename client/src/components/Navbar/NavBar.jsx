import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    getAllVideoGames,
    getAllGenres,
    getCreate,
    getNotCreate,
    ratingOrder,
    alphabeticalOrder,
    filterGames
} from '../../redux/Actions/actions'
import style from './NavBar.module.css'

//* componente con los botones , filtros y funciones de la pagina
const NavBar = () => {
    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, []);

    const handleFilter = (event) => {
        dispatch(filterGames(event.target.value));
    };

    const handleCreatedButton = () => {
        dispatch(getCreate());
    };
    const handleUnCreatedButton = () => {
        dispatch(getNotCreate());
    };

    const handleAllGames = () => {
        dispatch(getAllVideoGames());
    };

    const handleSort = (event) => {
        dispatch(alphabeticalOrder(event.target.value));
    };

    const ratingHandler = (event) => {
        dispatch(ratingOrder(event.target.value))
    };
    return (
        <div className={style.navbar}>
            <div className={style.links}>
                <Link to="/home" >
                    <button className={style.button}>Home</button>
                </Link>
                <br />
                <Link to="/form">
                    <button className={style.button}>Create New Game</button>
                </Link>
            </div>
            <h5 className={style.H5}>OPTIONS:</h5>
            <div className={style.option}>
                <button value="AllGames" onClick={handleAllGames} className={style.filterButton}>
                    All Games
                </button>
            </div>
            <div className={style.option}>
                <button value='created' onClick={handleCreatedButton} className={style.filterButton}>
                    Created
                </button>
            </div>
            <div className={style.option}>
                <button value='uncreated' onClick={handleUnCreatedButton} className={style.filterButton}>
                    Not Created
                </button>
            </div>
            <div className={style.option}>
                <select name="rating" placeholder="Rating" onChange={ratingHandler} className={style.filter}>
                    <option value=''>Filter by rating</option>
                    <option value='Falling'>5➡0</option>
                    <option value='Upward'>0➡5</option>
                </select>
            </div>
            <div className={style.option}>
                <select name="alphabetical" placeholder="Alphabetical" onChange={handleSort} className={style.filter}>
                    <option value=''>Filter by name</option>
                    <option value='Descendente'>Z-A</option>
                    <option value='Ascendente'>A-Z</option>
                </select>
            </div>
            <div className={style.option}>
                <span>Select Genre:</span>
                <br />
                <select name="Genres" placeholder="Gender" onChange={handleFilter} className={style.filter} size={5}>
                    {genres.map((genre) => (
                        <option
                            key={genre.id}
                            value={genre.name}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
        </div >
    )
}

export default NavBar;