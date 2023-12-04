import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, getDetail } from "../../redux/Actions/actions";
import style from './Detail.module.css'

//* componente con el detail al maximo de un juego
const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector((state) => state.detail);
    const genres = detail.genres
    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(clearDetail());
        };
    }, [id]);


    return (
        <div className={style.boxDetail}>
            <div className={style.Detail}>
                <div className={style.nameBox} >
                    <h2 className={style.name}>Name: {detail.name}</h2>
                    <hr />
                </div>
                <img src={detail.image} alt="" className={style.image} />
                <div className={style.data}>
                    <h2 className={style.id}>ID: {detail.id}</h2>
                    <p className={style.platforms}>PLATFORMS: {detail.platforms}</p>
                    <p className={style.genreBox}>GENRES: {genres?.map((genre, index) => <span className={style.genreSpan} key={index}>{genre} </span>)}</p>
                    <p className={style.released}>RELEASED: {detail.released}</p>
                    <h6 className={style.rating}>RATING: <span className={style.ratingSpan}>{detail.rating}</span></h6>
                </div>
                <div className={style.descriptionBox}>
                    <hr />
                    <p className={style.titleDescription}> DESCRIPTION</p>
                    <p className={style.description}>{detail.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;