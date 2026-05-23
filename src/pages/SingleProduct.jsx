	
import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router";
 
export default function SingleProduct() {
  const { id } = useParams();
  const [actualId, setActualId]=useState()
  const [product,setProduct]= useState()
  const navigate = useNavigate()
 
  useEffect(() => {
    const actId=id
    setActualId(actId)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err)
        // in caso di errore (es. 404), torna indietro
        navigate("/404");
      });
      
  }, [id,actualId]);
 
  return (
    <div>
        <div key= {"card-" + id}  className="m-auto mt-2 mb-2" style={{width:"80%"}}>
        <div className="card" >
          <img className="m-auto mt-2 mb-2" src={product?.image} style={{width: "20%",objectFit: "cover"}} alt="" />
          <p className="px-2 m-auto"><strong>{product?.title}</strong></p>
          <p><i className="bi bi-star-fill px-2"></i>{product?.rating?.rate}<i className="bi bi-person-heart px-2"></i>{product?.rating?.count}</p>
          <p><i className="bi bi-currency-euro px-2"></i>{product?.price}</p>
          <hr />
          <p className="p-2">{product?.description}</p>
        </div>
      </div>
    </div>
  );
}