import SwiperHome from "../components/swiper/SwiperHome"
import style from "./page.module.css"
import ButtonHome from "../components/buttons/ButtonHome"
import { BsArrowDownCircleFill } from 'react-icons/bs'
import { moreInfo, paragraphOne, paragraphOneContinue, paragraphTwo, paragraphTwoContinue, titleQuestion, titleTwo, welcomeText, welcomeTextTwo } from "@/constants/constansHome"
import Footer from "../components/footer/Footer"
import ContentCreate from "../components/contentCreate/ContentCreate"

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

      <ContentCreate backgroundImg={'/background2.png'} reverse={false} identificate={'moreInfo'} title={titleQuestion} img={'/interview.avif'} paragraph={[paragraphOne, paragraphOneContinue]} clipath={'polygon(0 0, 100% 0, 100% 100%, 0 82%);'}>

        <ButtonHome />
      </ContentCreate>

      <ContentCreate backgroundImg={'/background.png'} color={'white'} background={'white'} reverse={true} title={titleTwo} img={'/video-conference1.avif'} paragraph={[paragraphTwo, paragraphTwoContinue]}>

      </ContentCreate>
      <Footer />
    </>
  )
}
