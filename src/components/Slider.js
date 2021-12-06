import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import '../styles/slider.scss';

SwiperCore.use([Navigation]);

export default function Slider({itemsArray, styles, header}) {
  const settings = {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: true,
  }

  return (
    <div style={styles?.container} className='swiper__container'>
      <h2 style={styles?.header}>
        {header}
      </h2>
      <Swiper
        {...settings}
        className="swiper"
        style={styles?.main}
      >
          {
            itemsArray.map((el, i) => {
              return (
                <SwiperSlide key={i}>
                  <div style={styles?.slide} className="swiper__slide">
                    <div style={styles?.image} className="swiper__img">
                      <img src={el.img} alt="" />
                    </div>
                    <div className="swiper__text">
                      <div style={styles?.title} className="swiper__title">
                        {el.title}
                      </div>
                      <p style={styles?.para} className="swiper__p">
                        {el.p}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    </div>
  );
}