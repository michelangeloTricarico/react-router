import { Link, NavLink } from "react-router"
import BudgetContext from "../context/BudgetContext"
import { useState } from "react"
export default function Header({NavList}){
    const [budgetMode,setBudgetMode] = useState(false)
    const [budgetValue,setBudgetValue] = useState("")
    return( 	
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <BudgetContext.Provider value={{budgetMode, budgetValue}}/>
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
                <form className="d-flex ms-auto" role="filter">
                <input onChange={(e)=>{
                    if(!isNaN(e.target.value)){
                        setBudgetValue(e.target.value)
                    } 
                    }} value={budgetValue} className="form-control me-2" type="filter" placeholder="Budget value" aria-label="Search"/>
                </form>
                <div className="form-check">
                    <input onChange={(e)=>{setBudgetMode(e.target.checked)}} className="form-check-input" type="checkbox" value={budgetMode} id="checkDefault"/>
                </div>
                </div>
            </div>
            </nav>
    )
}