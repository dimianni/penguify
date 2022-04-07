import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";

// import Swiper core and required modules
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Product.scss'


// https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
const Product = () => {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    let carousel = <Spinner />;


    function getProduct() {
        return axios.get('https://penguify-pbl-default-rtdb.firebaseio.com/products/' + id + '.json')
            .then(response => {
                console.log(response.data);
                return response.data
            })
    }

    useEffect(() => {
        let mounted = true;
        getProduct()
            .then(el => {
                if (mounted) {
                    setProduct(el)
                }
            })

        // createCarousel() 
        return () => mounted = false;
    }, [])






    if (!product) {
        <Spinner />
    } else {
        return (
            <div className='productPage'>
                <div className='container'>
                    <div className='productPage-wrapper'>
                        <div className='productPage-wrapper_images'>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                            >
                                {product.images.map(img => {
                                    return (
                                        <SwiperSlide>
                                            <img src={`../images/${img}.webp`} />
                                        </SwiperSlide>
                                    )

                                })}
                            </Swiper>
                        </div>
                        <div className='productPage-wrapper_description'>
                            <div className='productPage-wrapper_description-title'>{product.title}</div>
                            <div className='productPage-wrapper_description-price'>${product.price}</div>

                            <button className="button primary">Add to card</button>
                        </div>
                    </div>

                </div>
            </div>

        )
    }



}

export default Product;