import { useState } from "react";
import { useDispatch } from 'react-redux';
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getGameByName } from '../../redux/Actions/actions'


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
    };



    return (
        <div className={styles.search}>
            {errors && <p>{errors}</p>}
            <input
                type='search'
                name="searchBar"
                placeholder="Search VideoGame"
                value={searchName}
                onChange={inputChange}
            />
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} onClick={searchHand} />
            </button>
        </div>
    )
};

export default SearchBar;
