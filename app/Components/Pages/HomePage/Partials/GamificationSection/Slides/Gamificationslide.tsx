'use client'
import { UiImage } from '@/app/utils/lib'
import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import BasketballIcon from '@/assets/Icons/basketball-icon.svg'
import CoffeeIcon from '@/assets/Icons/coffe-icon.svg'
import FightingIcon from '@/assets/Icons/fighting-icon.svg'
import FoodIcon from '@/assets/Icons/food-icon.svg'
import BicycleIcon from '@/assets/Icons/bicycle-icon.svg'
import FirstGameContent from './Subslides/FirstGameContentSlide'
import SecondGameContent from './Subslides/SecondGameContent'
import ThirdGameContent from './Subslides/ThirdGameContentSlide'
import FourthGameContentSlide from './Subslides/FourthGameContentSlide'
import FifthGameContent from './Subslides/FifthGameContent'
const Fade = require("react-reveal/Fade")
const Slide = require("react-reveal/Slide")
import { motion } from 'framer-motion'
import CoffeMobileIcon from '@/assets/Icons/coffee-mobile-icon.svg'
import FightIconMobile from '@/assets/Icons/fight-icon-mobile.svg'
import { useIsTablet } from '@/app/utils/hooks'

const CorrespondingContent: FC<{ id: string }> = ({ id }) => {
    const FoundContent = Object.values(GamificationSlideData).find(objectValue => objectValue.id === id)?.contentcorrespondingToIcon
    return FoundContent ? <FoundContent /> : null
}

const isActive = (activeItemId: string, itemId: string) => {
    return activeItemId === itemId
}

const GamificationSlide: FC = () => {
    const [activeItem, setActiveItem] = useState('basketball')
    const handleActiveItem = (itemId: string) => {
        setActiveItem(itemId)
    }
    const isTablet = useIsTablet()

    return (
        <div className='text-white h-full grid grid-cols-1 lg:grid-cols-2'>
            <div className='relative'>
                <div className='relative h-[400px] lg:h-full w-full'>
                    <UiImage
                        src={Object.values(GamificationSlideData).find(objectValue => objectValue.id === activeItem)?.CharacterImage ?? ''}
                        fill
                        style={{ objectFit: 'contain' }}
                        alt="dream city main character"
                        className='z-10'
                    />

                </div>
                <div className='w-full h-full absolute top-0 left-0 z-20 flex justify-center items-between '>
                    <Fade left>
                        <div className='flex flex-col justify-between'>
                            <button type='button' onClick={() => { handleActiveItem(GamificationSlideData.FirstGame.id) }} className={`w-[120px] h-[120px] mt-[46px] skew-x-[-9deg] skew-y-0 translate-x-[-75px] -translate-y-7 drop-shadow-[11px_11px_8px_rgba(9,_16,_30,_0.20)] transition-all hover:opacity-100
                            ${isActive(activeItem, GamificationSlideData.FirstGame.id) ? 'opacity-100 !translate-x-[-86px] !translate-y-[-40px]' : 'opacity-50'}
                            `}>
                                <motion.div whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 1.1 }}
                                    drag
                                    dragConstraints={{ left: -100, right: 100, top: -30, bottom: 100 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >

                                   {
                                    isTablet ?
                                    <GamificationSlideData.FirstGame.MobileIcon className="skew-x-[10deg] skew-y-0" />
                                    :

                                    <GamificationSlideData.FirstGame.SVGIcon className="skew-x-[10deg] skew-y-0" />
                                   }
                                </motion.div>
                            </button>


                            <button type='button' onClick={() => { handleActiveItem(GamificationSlideData.SecondGame.id) }} className={`w-[90px] lg:w-[120px] h-[86px] lg:h-[120px] block skew-x-[-9deg] skew-y-0 -translate-y-10 translate-x-[-25px] hover:opacity-100 transition-all
                        ${isActive(activeItem, GamificationSlideData.SecondGame.id) ? 'opacity-100  !translate-x-[-39px] !-translate-y-14' : 'opacity-50'}
                        `}>
                                <motion.div whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 1.1 }}
                                    drag
                                    dragConstraints={{ left: -100, right: 100, top: -30, bottom: 100 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >

                                        {
                                            isTablet ?
                                            <GamificationSlideData.SecondGame.MobileIcon className="skew-x-[10deg] skew-y-0 lg:scale-125 w-[86px]" />

                                            :

                                        <GamificationSlideData.SecondGame.SVGIcon className="skew-x-[10deg] skew-y-0 scale-125" />
                                        }


                                </motion.div>

                            </button>
                            <button type='button' onClick={() => { handleActiveItem(GamificationSlideData.FifthGame.id) }} className={`w-[120px] h-[120px] block skew-x-[-9deg] skew-y-0 -translate-x-14 -translate-y-8 hover:opacity-100 transition-all
                        ${isActive(activeItem, GamificationSlideData.FifthGame.id) ? 'opacity-100  lg:!translate-x-[-72px] lg:!-translate-y-12' : 'opacity-50'}
                        `}>
                                <motion.div whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 1.1 }}
                                    drag
                                    dragConstraints={{ left: -100, right: 100, top: -30, bottom: 100 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >
                                    <GamificationSlideData.FifthGame.SVGIcon className="skew-x-[10deg] skew-y-0 scale-125" />
                                </motion.div>
                            </button>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className='flex flex-col justify-between'>


                            <button type='button' onClick={() => { handleActiveItem(GamificationSlideData.ThirdGame.id) }} className={`w-[120px] h-[120px] mt-[86px] skew-x-[-10deg] skew-y-0 translate-y-6 translate-x-8 hover:opacity-100 transition-all
                        ${isActive(activeItem, GamificationSlideData.ThirdGame.id) ? 'opacity-100 !translate-y-4 !translate-x-1' : 'opacity-50'}
                        `}>
                                <motion.div whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 1.1 }}
                                    drag
                                    dragConstraints={{ left: -100, right: 100, top: -30, bottom: 100 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >
                                    <GamificationSlideData.ThirdGame.SVGIcon className="skew-x-[10deg] skew-y-0" />
                                </motion.div>
                            </button>
                            <button type='button' onClick={() => { handleActiveItem(GamificationSlideData.FourthGame.id) }} className={`w-[120px] h-[120px] block skew-x-[-10deg] -translate-y-20 translate-x-2 hover:opacity-100 transition-all
                        ${isActive(activeItem, GamificationSlideData.FourthGame.id) ? 'opacity-100 !-translate-y-24 !-translate-x-2' : 'opacity-50'}
                        `}>
                                <motion.div whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 1.1 }}
                                    drag
                                    dragConstraints={{ left: -100, right: 100, top: -30, bottom: 100 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} >
                                    <GamificationSlideData.FourthGame.SVGIcon className="skew-x-[10deg]" />
                                </motion.div>
                            </button>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className='h-full flex flex-col justify-center space-y-5 text-right'>
                <Fade bottom>
                    <h1 className='hidden lg:inline-block text-[32px] lg:text-5xl text-center lg:text-left'>Gamification</h1>
                </Fade>
                <CorrespondingContent id={activeItem} />
            </div>
        </div>
    )
}

interface GamificationSlideDataType {
    id: string,
    SVGIcon: any,
    contentcorrespondingToIcon: React.FC<any>,
    CharacterImage: string,
    MobileIcon: any
}

const GamificationSlideData: { [key: string]: GamificationSlideDataType } = {
    FirstGame: {

        id: 'serving-coffee',
        SVGIcon: CoffeeIcon,
        CharacterImage: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/main-character/main-character-serving-coffe.png',
        contentcorrespondingToIcon: SecondGameContent,
        MobileIcon: CoffeMobileIcon
    },
    SecondGame: {
        id: 'fighting',
        SVGIcon: FightingIcon,
        CharacterImage: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/main-character/main-character-fighting-pose.png',
        contentcorrespondingToIcon: ThirdGameContent,
        MobileIcon: FightIconMobile
    },
    ThirdGame: {
        id: 'basketball',
        SVGIcon: BasketballIcon,
        CharacterImage: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/main-character/main-character-basketball.png',
        contentcorrespondingToIcon: FirstGameContent,
        MobileIcon: CoffeMobileIcon
    },
    FourthGame: {
        id: 'serving-food',
        SVGIcon: FoodIcon,
        CharacterImage: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/main-character/main-character-serving-food.png',
        contentcorrespondingToIcon: FifthGameContent,
        MobileIcon: CoffeMobileIcon
    },
    FifthGame: {
        id: 'bicycling',
        SVGIcon: BicycleIcon,
        CharacterImage: 'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/main-character/main-character-on-bike.png',
        contentcorrespondingToIcon: FourthGameContentSlide,
        MobileIcon: CoffeMobileIcon
    },
}

GamificationSlide.displayName = 'GamificationSlide'

export default GamificationSlide
