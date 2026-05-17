export default function Card({products}){
    return(
        <div className="row">
    {products.map((product,index)=>(
      <div key= {"card-" + index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 px-4" >
        <div className="card" style={{height:"1000px"}}>
          <img src={product.image} style={{height: "200px",width: "100%",objectFit: "cover"}} alt="" />
          <p className="px-2"><strong>{product.title}</strong></p>
          <p><i className="bi bi-star-fill px-2"></i>{product.rating.rate}<i class="bi bi-person-heart px-2"></i>{product.rating.count}</p>
          <p><i className="bi bi-currency-euro px-2"></i>{product.price}</p>
          <hr />
          <p className="px-2">{product.description}</p> 
        </div>
      </div>
      ))}
    </div>
    );
}