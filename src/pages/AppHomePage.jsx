
    export default function HomePage({products, link}){
    return(
        <div className="banner-container d-flex align-items-center text-center">
            <div className="col-6">
                <p className="banner-text">Benvenuto su <br /> MyStore!</p>
                <button type="button" class="btn btn-warning text-white fs-2 ">Scopri i prodotti</button>
            </div>
        </div>
    )
}