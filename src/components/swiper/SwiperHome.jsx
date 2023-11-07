'use client'
import { Autoplay, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import style from './swiper.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/virtual'

const images = [
  '/video-conference3.avif',
  '/video-conference1.avif',
  '/video-conference2.avif'
]

export default function SwiperHome() {
  return (
    <div className={style.swiperContainer}>
      <Swiper
        effect='card'
        autoplay={{ delay: 6000 }}
        modules={[Autoplay, EffectCards]}
        slidesPerView={1}
      >
        {images.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <img className={style.img} src={slideContent} alt='backgound images' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
