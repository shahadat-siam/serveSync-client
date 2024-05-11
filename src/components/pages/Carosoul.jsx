import image1 from '../../assets/images/carosoul1.jpg'
import image2 from '../../assets/images/carosoul2.jpg'
import image3 from '../../assets/images/carosoul3.jpg'
import image4 from '../../assets/images/carosoul4.jpg'
import image5 from '../../assets/images/carosoul5.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import Slide from './Slide';

export default function Carosoul() {
  return (
    <div className=' pb-8 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={image1}/></SwiperSlide>
        <SwiperSlide><Slide image={image2} /></SwiperSlide>
        <SwiperSlide><Slide image={image3} /></SwiperSlide>
        <SwiperSlide><Slide image={image4} /></SwiperSlide>
        <SwiperSlide><Slide image={image5} /></SwiperSlide>
         
      </Swiper>
    </div>
  );
}