import React, { FC } from 'react'
import { UiImage } from '@/app/utils/lib'
const Fade = require("react-reveal/Fade")

const CityTurnsSection: FC = () => {
  return (
    <section className='w-full h-96 relative'>
      <Fade bottom >
        <UiImage
          fill
          src='https://dream-city-bucket.s3.eu-central-1.amazonaws.com/CityTurnsSection.png'
          alt='shodow background'
          priority
          quality={75}
          className='z-0'
        />
        <div className='absolute w-full h-full z-10 flex justify-center'>
          <div className='container flex justify-center'>
            <div className='mt-14 text-center text-white'>
              <Fade left cascade>
                <div className='text-2xl lg:text-3xl font-medium'>
                  A CITY TURNS THE DREAMS
                </div>
              </Fade>
              <Fade left cascade>
                <div className='text-2xl lg:text-3xl text-primary mt-3'>
                  TO THE REALITY
                </div>
              </Fade>
              <div className='max-w-[324px] lg:max-w-none lg:w-[650px] text-sm font-light mt-8'>
                <Fade bottom>
                  <p>
                    Dream City is an exciting Adult Visual Novel game that offers players a chance to experience life in a fictional city full of drama and adventure. The game&apos focus on character development and relationships makes it an excellent choice for fans of the visual novel genre. The ability to make choices that affect the story&aposs outcome gives the game a high replay value, as players can experience different outcomes depending on their decisions.
                  </p>
                </Fade>

              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  )
}

CityTurnsSection.displayName = "CityTurnsSection"
export default CityTurnsSection
