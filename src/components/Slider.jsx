// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Slider({products}){
    const navigate = useNavigate()
    function viewProduct(id){
        navigate(`/products/${id}`)
    }
    return(
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={14}
            slidesPerView={8}
            slidesPerGroup={2}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000 }}
            >
            {products.map((product, i) => (
                <SwiperSlide key={product.id}>
                <img
                    onClick={() => viewProduct(product.id)}
                    src={product.image}
                    alt={`slide-${i}`}
                    style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
                />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}


