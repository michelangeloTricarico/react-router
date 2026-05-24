import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import BudgetContext from "../context/BudgetContext";
export default function Card({products}){
    const { budgetMode,setBudgetMode,budgetValue,setBudgetValue } = useContext(BudgetContext);
    useEffect(filter,[budgetMode, budgetValue])
    const [productsShown, setProductsToShown]= useState(products)
    function filter(){
      let products_filt=[]
      console.log(budgetMode, budgetValue)
      if(budgetMode==true && budgetValue!=""){
        products_filt = products.filter((product)=>Number(product.price)<=Number(budgetValue))
        setProductsToShown(products_filt)
      }
      else{
        setProductsToShown(products)
      }
    }
    return(
        <div className="row">
    {productsShown && productsShown.map((product,index)=>(
      <div key= {"card-" + index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 px-4" >
        <div className="card" style={{height:"500px"}}>
          <img src={product.image} style={{height: "200px",width: "100%",objectFit: "cover"}} alt="" />
          <p className="px-2"><strong>{product.title}</strong></p>
          <p><i className="bi bi-star-fill px-2"></i>{product.rating.rate}<i className="bi bi-person-heart px-2"></i>{product.rating.count}</p>
          <p><i className="bi bi-currency-euro px-2"></i>{product.price}</p>
          <hr />
          <Link className="px-2" to={`/products/${product.id}`}>View Product</Link>
        </div>
      </div>
      ))}
    </div>
    );
}