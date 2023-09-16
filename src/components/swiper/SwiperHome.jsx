'use client'
import { Autoplay, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import style from './swiper.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/virtual'

export default function SwiperHome() {
  const img = [
    <img className={style.img} key={1} src="/video-conference3.avif" />,
    <img className={style.img} key={2} src="/video-conference1.avif" />,
    <img className={style.img} key={3} src="/video-conference2.avif" />
  ]
  return (
    <div className={style.swiperContainer}>
      <Swiper effect='card' autoplay={{ delay: 6000 }} modules={[Autoplay, EffectCards]} slidesPerView={1}>
        {img.map((slideContent) => (
          <SwiperSlide key={slideContent}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}