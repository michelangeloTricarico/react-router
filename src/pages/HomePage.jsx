import { Link, NavLink } from "react-router"
import Slider from "../components/Slider"

    export default function HomePage({link,products}){
    return(
        <div>
            <div className="banner-container d-flex align-items-center text-center">
                <div className="col-6">
                    <p className="banner-text">Benvenuto su <br /> MyStore!</p>
                    <Link to={link} type="button" className="btn btn-warning text-white fs-2 ">Scopri i prodotti</Link>
                </div>
            </div>
            <div>  
                <Slider products={products}></Slider>
            </div>
        </div>

    )
}