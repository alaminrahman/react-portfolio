import React from "react";
import "./Portfolio.css";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { Autoplay } from 'swiper';

const Portfolio = () => {
    return (
        <div className="portfolio">
            {/* Heading */}
            <span>Recent Project</span>
            <span>Portfolio</span>

            {/* Swiper */}
            <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 3000}}
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                <SwiperSlide>
                    <img src={ Sidebar } alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={ Ecommerce } alt="" />
                </SwiperSlide>               

                <SwiperSlide>
                    <img src={ MusicApp } alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={ Hoc } alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default Portfolio;