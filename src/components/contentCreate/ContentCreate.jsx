import Image from 'next/image'
import style from './contentCreate.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

export default function ContentCreate({
  clipath,
  backgroundImg,
  color,
  background,
  reverse,
  identificate,
  title,
  paragraph,
  img,
  children
}) {
  const sectionStyle = {
    background: `linear-gradient(to bottom, transparent, #0009), url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    clipPath: `${clipath}`
  }
  return (
    <section
      style={sectionStyle}
      id={identificate || ''}
      className={style.sectionMoreInfo}
    >
      <h3 className={style.titleInfo}>{title}</h3>

      <div
        className={`${style.question} ${reverse && style.reverseItem} ${
          inter.className
        }`}
      >
        <div>
          {paragraph?.map((p) => (
            <>
              <p style={{ color }} key={p}>
                {p}
              </p>{' '}
              <br />
            </>
          ))}
        </div>

        <Image width={400} height={400} src={img} alt='interview picture' />
      </div>

      {children}
    </section>
  )
}
