import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllGenres } from "../../redux/Actions/actions";
import Validation from './validation';
import axios from "axios";
import style from "./form.module.css"

//* componente con las opciones para crear un juego nuevo y guardarlo en la DB
const Form = () => {
    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGenres())
    }, []);

    const [form, setForm] = useState({
        name: "",
        description: "",
        platforms: "",
        genres: [],
        image: "",
        released: "",
        rating: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        platforms: "",
        genres: [],
        image: "",
        released: "",
        rating: "",
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        if (property === "genres") {
            const genreName = event.target.value;
            if (form.genres.includes(genreName)) {
                const updatedGenres = form.genres.filter((genre) => genre !== genreName);
                setForm({
                    ...form,
                    genres: updatedGenres
                });
            } else {
                setForm({
                    ...form,
                    genres: [...form.genres, genreName]
                });
            }
            return;
        } else {
            setForm({
                ...form,
                [property]: value
            });
        }
        setErrors(
            Validation({
                ...form,
                [property]: value
            })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationForm = Validation(form);
        setErrors(validationForm);
        const hasErrors = Object.values(validationForm).some((error) => !!error);
        if (!hasErrors) {
            axios.post('http://localhost:3001/videogames', form)
                .then((response) => alert('Successfully created'))
                .catch((error) => alert("Error creating video game"));
        } else {
            alert('There are errors in the form. Cannot submit')
        }
    };
    return (
        <div className={style.box}>
            <div className={style.formContainer}>
                <h2>Videogame Registration</h2>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <hr />
                    <div className={style.formSection}>
                        <label className={style.label}>Name:
                            <div>
                                <input
                                    value={form.name}
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    onChange={changeHandler}
                                    className={style.input}>
                                </input>
                            </div>
                            {errors.name && <p className={style.error}>{errors.name}</p>}
                        </label>
                    </div>

                    <div className={style.formSection}>
                        <label className={style.label}>Platforms:
                            <div>
                                <input
                                    value={form.platforms}
                                    type="text"
                                    name="platforms"
                                    onChange={changeHandler}
                                    className={style.input}>
                                </input>
                            </div>
                            {errors.platforms && <p className={style.error}>{errors.platforms}</p>}
                        </label>
                    </div>

                    <div className={style.formSection}>
                        <label className={style.label}>
                            Select Genres:
                            <div>
                                <select
                                    value={form.genres}
                                    name="genres"
                                    multiple
                                    onChange={changeHandler}
                                    className={style.select}
                                >
                                    {genres.map((genre) => (
                                        <option
                                            key={genre.id}
                                            value={genre.name}
                                        >
                                            {genre.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.genres && <p className={style.error}>{errors.genres}</p>}
                        </label>
                    </div>


                    <div className={style.formSection}>
                        <label className={style.label}>Rating:
                            <div>
                                <input
                                    value={form.rating}
                                    type="number"
                                    name="rating"
                                    step="0.1"
                                    onChange={changeHandler}
                                    className={style.input}>
                                </input>
                            </div>
                            {errors.rating && <p className={style.error}>{errors.rating}</p>}
                        </label>
                    </div>

                    <div className={style.formSection}>
                        <label className={style.label}>Image:
                            <div>
                                <input
                                    value={form.image}
                                    type="text"
                                    name="image"
                                    placeholder="Enter Image URL"
                                    onChange={changeHandler}
                                    className={style.input}
                                />
                            </div>
                            {errors.image && <p className={style.error}>{errors.image}</p>}
                        </label>
                    </div>


                    <div className={style.formSection}>
                        <label className={style.label}>Released:
                            <div>
                                <input
                                    value={form.released}
                                    type="date"
                                    name="released"
                                    autoComplete="off"
                                    onChange={changeHandler}
                                    className={style.input}
                                    min="1950-01-01"
                                    max="2025-12-31"
                                    required>
                                </input>
                            </div>
                            {errors.released && <p className={style.error}>{errors.released}</p>}
                        </label>
                    </div>

                    <div className={style.formSection}>
                        <label className={style.label}>Description:
                            <div>
                                <textarea
                                    value={form.description}
                                    name="description"
                                    rows="4"
                                    onChange={changeHandler}
                                    className={style.textarea}>
                                </textarea>
                            </div>
                            {errors.description && <p className={style.error}> {errors.description}</p>}
                        </label>
                    </div>
                    <hr />
                    <button className={style.submit} type="submit" >Save New Game</button>
                </form>
            </div>
        </div>
    )
}

export default Form;