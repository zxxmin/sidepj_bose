import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const formatColor = (color) => {
    return color
        .replace(/\s+/g, '_')
        .replace(/[^a-zA-Z0-9_]/g, '')
        .replace(/_{2,}/g, '_');
}

const SellImg = ({color}) => {
    const formattedColor = formatColor(color);

    return (
        <div className='sell-img'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
            >
                <SwiperSlide><img src={`/sidepj_bose/sell_${formattedColor}_01.webp`} alt={`${color} 이미지 1`} /></SwiperSlide>
                <SwiperSlide><img src={`/sidepj_bose/sell_${formattedColor}_02.webp`} alt={`${color} 이미지 2`} /></SwiperSlide>
                <SwiperSlide><img src={`/sidepj_bose/sell_${formattedColor}_03.webp`} alt={`${color} 이미지 3`} /></SwiperSlide>
                <SwiperSlide><img src={`/sidepj_bose/sell_${formattedColor}_04.webp`} alt={`${color} 이미지 4`} /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SellImg;