'use client'
import React, { FC } from 'react'
import Button from '@/app/Components/Buttons/Button'
import Play from '@/assets/Icons/Play.svg'
import { UiFade, UiImage } from '@/app/utils/lib'
const Fade = require("react-reveal/Fade")
import KickstarterLogo from '@/assets/Icons/KickStarterLogo.svg'
import PatreonLogo from '@/assets/Icons/PatreonLogo.svg'
import useIsDomLoaded from '@/app/utils/hooks/useIsDomLoaded'
import ArrowDownIcon from '@/assets/Icons/arrow-down.svg'

const HeroSection: FC = () => {
  const isDomLoaded = useIsDomLoaded()
  return (
    <div className={`w-full min-h-[774px] lg:min-h-[649px] max-h-[1000px] lg:aspect-video relative `}>
      <UiImage
        fill
        src='https://dream-city-bucket.s3.eu-central-1.amazonaws.com/HeroBackground.png'
        alt='people playing'
        priority
        quality={50}
        className='z-10 w-auto h-auto object-cover lg:object-none object-[60%] lg:object-none'
      />
      {/* <UiImage
        fill
        src='https://dream-city-bucket.s3.eu-central-1.amazonaws.com/shadowBackground.png'
        alt='shodow background'
        priority
        quality={10}
        className='z-20'
      /> */}
      <div className='absolute top-0 left-0 w-full h-full z-20 bg-[linear-gradient(45deg,_#09101E_0%,_rgba(12,_28,_43,_0.00)_73.44%)]'>

      </div>
      {isDomLoaded &&
        <div className='w-full h-full absolute z-30 flex justify-center text-white'>
          <div className='container'>
            <div className='ml-5 lg:ml-24 pt-52'>
                <Fade left>
              <h1 className='max-w-[326px] lg:max-w-none text-5xl lg:text-5xl font-bold text-white'>
                  Enter the World of
              </h1>
                </Fade>
              <div className='text-4xl mt-5 font-medium text-white'>
                <Fade left cascade>
                  DREAM CITY
                </Fade>
              </div>
            </div>
            <div className='max-w-[287px] lg:max-w-none ml-5 lg:ml-24 text-sm w-[405px] font-extralight mt-5'>
              <Fade left cascade>
                Dream City is an exciting new Visual Novel game that combines adventure, romance, and drama.
              </Fade>
            </div>
            <Fade left cascade>
              <div className='ml-5 lg:ml-20 w-[405px] flex flex-col justify-between mt-5 lg:mt-20 space-y-4'>


                <Button
                  Name={'WATCH TRAILER'}
                  ButtonStyle={'w-48 px-5 py-4 flex items-center rounded-3xl text-sm font-medium bg-gradient-to-r from-[#6E7A8A] to-[rgba(0,0,0,0.5)]'}
                  Icon={<Play className="text-gray ml-[0.2rem]" />}
                  IconStyle={`flex justify-center items-center bg-white w-4 h-4 rounded-full ml-3`}
                />





                <Button
                  Name={'Support Us On '}
                  ButtonStyle={'flex justify-center px-5 py-4 flex items-center rounded-3xl text-sm font-medium red-gradient-bg  whitespace-nowrap w-min'}
                  Icon={<KickstarterLogo />}
                  IconStyle={`flex justify-center items-center  rounded-full ml-3`}
                />
                <Button
                  Name={'Support Us On '}
                  ButtonStyle={'flex justify-center px-5 py-4 flex items-center rounded-3xl text-sm font-medium red-gradient-bg  whitespace-nowrap w-min'}
                  Icon={<PatreonLogo />}
                  IconStyle={`flex justify-center items-center  rounded-full ml-3`}
                />



              </div>
              <div className='w-full flex justify-center mt-[50px]'>
                <ArrowDownIcon />
              </div>
            </Fade>
          </div>
        </div>

      }
    </div>
  )
}

HeroSection.displayName = "HeroSection"
export default HeroSection
