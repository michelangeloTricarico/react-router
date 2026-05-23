import { Link, NavLink } from "react-router"

    export default function HomePage({link}){
    return(
        <div className="banner-container d-flex align-items-center text-center">
            <div className="col-6">
                <p className="banner-text">Benvenuto su <br /> MyStore!</p>
                <Link to={link} type="button" className="btn btn-warning text-white fs-2 ">Scopri i prodotti</Link>
            </div>
        </div>

    )
}