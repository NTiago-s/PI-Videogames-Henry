import { useState } from "react";
import { useDispatch } from 'react-redux';
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getGameByName } from '../../redux/Actions/actions'

//* componente para buscar los personajes por nombre
const SearchBar = () => {
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('');
    const [errors, setErrors] = useState('');

    const inputChange = (e) => {
        setSearchName(e.target.value);
    }

    const searchHand = () => {
        dispatch(getGameByName(searchName))
            .catch((error) => {
                setErrors(error.message)
            });
        setSearchName('')
        setErrors('')
    };
    return (
        <div className={styles.search}>
            {errors && <p>{errors}</p>}
            <input
                type='text'
                name="searchBar"
                value={searchName}
                onChange={inputChange}
                className={styles.input}
                placeholder="Search VideoGames"
            />
            <button className={styles.button} onClick={searchHand} >
                <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
            </button>
        </div>
    )
};

export default SearchBar;
