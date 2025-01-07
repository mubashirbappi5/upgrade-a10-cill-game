import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='w-11/12   mx-auto rounded-lg'>
             <Swiper
        spaceBetween={0}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper md:h-96"
      >
        <SwiperSlide>
          <img className='rounded-lg md:h-96  w-full' src="https://i.ibb.co.com/1TKjV7p/Black-And-Yellow-Futuristic-Game-You-Tube-Thumbnail-4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-lg w-full md:h-96  ' src="https://i.ibb.co.com/XYghrYt/Black-And-Yellow-Futuristic-Game-You-Tube-Thumbnail-3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-lg w-full md:h-96  ' src="https://i.ibb.co.com/LS6NxSv/Black-And-Yellow-Futuristic-Game-You-Tube-Thumbnail-2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='rounded-lg w-full md:h-96   ' src="https://i.ibb.co.com/mJ37sQf/Black-And-Yellow-Futuristic-Game-You-Tube-Thumbnail-1.png" />
        </SwiperSlide>
      </Swiper>
            
        </div>
    );
};

export default Banner;