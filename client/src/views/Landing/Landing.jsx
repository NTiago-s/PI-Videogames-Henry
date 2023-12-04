import { Link } from "react-router-dom";
import style from "./Landing.module.css";

//* componente que da la bienvenida a la pagina
const Landing = () => {
    return (
        <div className={style.landing}>
            <div className={style.box}>
                <div>
                    <h1 className={style.Presentacion}>
                        <span className={style.P1}>VIDEO</span> <span className={style.P2}>GAMES</span>
                    </h1>
                </div>
                <div>
                    <Link to="/home">
                        <button
                            className={style.button}>
                            <span>HOME</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Landing;