import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './ActualItems.css';
import {ActualItemsData} from './ActualItemsData'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import prevArrow from './../../../imgs/ActualItems_imgs/toLeft.png'
import nextArrow from './../../../imgs/ActualItems_imgs/toRight.png'

SwiperCore.use([Navigation]);

const CustomNavigation = () => (
  <div className="custom-navigation">
    <div className="swiper-button-prev">
      <img src={prevArrow} alt="Previous" />
    </div>
    <div className="swiper-button-next">
      <img src={nextArrow} alt="Next" />
    </div>
  </div>
);


export default function App() {



  return (
    <div className='actual-root wide-wrap'>
      <h1 className='actual-title'>Актуальное</h1>

      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <CustomNavigation />
        {ActualItemsData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="actual-item">
              <div className="actual-small-images">
                <div className="actual-small-top">
                  <img src={item.smallTopImg} alt="" />
                  <h2 className='top-text actual-item__title'>{item.topText}</h2>
                  <h2 className='top-descr actual-item__description'>{item.topDescr}</h2>
                </div>

                <div className="actual-small-bottom">
                  <img src={item.smallBotImg} alt="" />
                  <h2 className='bottom-text actual-item__title'>{item.botText}</h2>
                  <h2 className='bottom-descr actual-item__description'>{item.botDescr}</h2>
                </div>
              </div>

              <div className="actual-big-img">
                <img src={item.bigImg} alt="" />
                <h2 className='big-text actual-item__title'>{item.bigText}</h2>
                <h2 className='big-descr actual-item__description'>{item.bigDescr}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
