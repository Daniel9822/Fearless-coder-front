import SwiperHome from "@/components/swiper/SwiperHome"
import style from "./page.module.css"
import ButtonHome from "@/components/buttons/ButtonHome"
import { BsArrowDownCircleFill } from 'react-icons/bs'
import { Inter } from 'next/font/google'
import Image from "next/image"
import { moreInfo, paragraph, titleQuestion, welcomeText, welcomeTextTwo } from "@/constants/constansHome"
import Footer from "@/components/footer/Footer"
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <main className={style.mainContent}>
        <SwiperHome />

        <div className={style.homeInfo}>
          <div className={style.content}>
            <p>
              {welcomeText}
              <strong className={style.textStrong}>
                {welcomeTextTwo}
              </strong>
            </p>

            <ButtonHome />

            <span className={style.moreInfo}>{moreInfo}</span>
            <span className={style.icon}> <a href="#moreInfo"> <BsArrowDownCircleFill size={30} /></a> </span>
          </div>
        </div>

      </main>
      <section id="moreInfo" className={style.sectionMoreInfo}>
        <h3 className={style.titleInfo}>{titleQuestion}</h3>

        <div className={`${style.question} ${inter.variable}`}>
          <p style={{ color: 'white' }}>{paragraph}</p>

          <Image width={400} height={400} src="/interview.avif" alt="interview picture" />
        </div>

        <ButtonHome />
      </section>

      <Footer />
    </>
  )
}
