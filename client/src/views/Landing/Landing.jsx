import { Link } from "react-router-dom";
import style from "./Landing.module.css";


const Landing = () => {
    return (
        <div className={style.landing}>
            <div className={style.box}>
                <h1 className={style.Presentacion}>
                    <div className={style.P1}>VIDEO</div> <div className={style.P2}>GAMES</div>
                </h1>
                <Link to="/home">
                    <button
                        className={style.button}>
                        <span>HOME</span>
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default Landing;