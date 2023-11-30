import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, getDetail } from "../../redux/Actions/actions";

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
        <div>
            <div>
                <img src={detail.image} alt="" />
                <h2>Name: {detail.name}</h2>
                <h2>Id: {detail.id}</h2>
                <p>Platforms: {detail.platforms}</p>
                <p>Genres: {genres?.map(genre => <span>{genre} </span>)}</p>
                <p>Released: {detail.released}</p>
                <h6>Rating <span>{detail.rating}</span></h6>
                <p>Description: {detail.description}</p>
            </div>
        </div>
    )
}

export default Detail;