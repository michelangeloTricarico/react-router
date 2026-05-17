import { Link, NavLink } from "react-router"
export default function Header({NavList}){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MyShop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {NavList.map((item,index) => (
                        <li className="nav-item" key={"nav"+index}>
                        <Link className="nav-link active" aria-current="page" to={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
            </nav>
    )
}