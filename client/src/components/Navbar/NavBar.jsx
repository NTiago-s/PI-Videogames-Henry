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
        <div>
            <Link to="/home" >
                <button>Home</button>
            </Link>
            <Link to="/form">
                <button>Form</button>
            </Link>
            <h5>Options</h5>
            <div>
                <button
                    value='created'
                    onClick={handleCreatedButton}>Created
                </button>
            </div>
            <div>
                <button
                    value='uncreated'
                    onClick={handleUnCreatedButton}>Not Created
                </button>
            </div>
            <div >
                <button
                    value="AllGames"
                    onClick={handleAllGames}>All Games
                </button>
            </div>
            <div>
                <select
                    name="rating"
                    placeholder="Rating"
                    onChange={ratingHandler}>
                    <option value=''>Filter by rating</option>
                    <option value='Falling'>5➡0</option>
                    <option value='Upward'>0➡5</option>
                </select>
            </div>
            <div>
                <select
                    name="alphabetical"
                    placeholder="Alphabetical"
                    onChange={handleSort}>
                    <option value=''>Filter by name</option>
                    <option value='Descendente'>Z-A</option>
                    <option value='Ascendente'>A-Z</option>
                </select>
            </div>
            <div>
                <select
                    name="Genres"
                    placeholder="Gender"
                    onChange={handleFilter}>
                    <option>select genre</option>
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