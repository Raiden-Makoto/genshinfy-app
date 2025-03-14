import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function ImageCarousel({ images }) {
    return (
        <Swiper
        modules = {[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-3xl"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt="{`Slide ${index + 1}`}" className="w-full h-auto rounded-lg" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

