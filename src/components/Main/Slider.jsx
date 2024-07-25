import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

function Slider() {
    return (
        <>
            <div className="promokod container m-auto">
                <p>Promo kodunuz var?</p>
                <span>Endirimdən istifadə edin!</span>
                <input type="text" id="prokod" placeholder="Promo kodu daxil edin" />
                <button>OK</button>
            </div> <br />
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    breakpoints :{
                        768:{
                            sliderPerView: 1.3
                        }
                    },
                }}

                pagination={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"  
                id='zehrimar'>
                
                <SwiperSlide><div id='slide1'></div></SwiperSlide>
                <SwiperSlide><div id='slide2'></div></SwiperSlide>
                <SwiperSlide><div id='slide3'></div></SwiperSlide>
                <SwiperSlide><div id='slide4'></div></SwiperSlide>
                <SwiperSlide><div id='slide5'></div></SwiperSlide>
                <SwiperSlide><div id='slide6'></div></SwiperSlide>
                <SwiperSlide><div id='slide7'></div></SwiperSlide>
                <SwiperSlide><div id='slide8'></div></SwiperSlide>
                <SwiperSlide><div id='slide9'></div></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Slider