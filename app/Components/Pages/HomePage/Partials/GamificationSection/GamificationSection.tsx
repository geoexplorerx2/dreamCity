'use client'
import { UiSlider } from '@/app/utils/lib'
import React, { FC, ReactNode, useCallback, useRef } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import Gamificationslide from './Slides/Gamificationslide'
import Arrow from '@/assets/Icons/ArrowRight.svg'



interface UiSliderDataType {
    id: string,
    Component: FC<any>
}

const UiSliderData: UiSliderDataType[] = [
    {
        id: '1',
        Component: Gamificationslide
    },
    // {
    //     id: '2',
    //     Component: Gamificationslide
    // },
]



const GamificationSection: FC = () => {


    const sliderRef = useRef<any>(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);


    return (
        <section id="gamification" className='w-full lg:h-[626px] relative z-10'>
            <div className='container px-5 lg:px-[100px] h-full relative py-11'>
                <UiSlider
                    // @ts-ignore
                    modules={[Navigation, Pagination]}
                    className='h-full'
                    ref={sliderRef}
                    
                >
                    {
                        UiSliderData.map(slideData => {
                            const { Component, id } = slideData;
                            return (
                                <UiSlider.Slide key={id} className="h-full">
                                    <Component />
                                </UiSlider.Slide>
                            )
                        })
                    }
                </UiSlider>
                {/* <div className="prev-arrow absolute top-1/2 left-0 z-10 text-white cursor-pointer" onClick={handlePrev}><Arrow className="rotate-180" /></div>
                <div className="next-arrow absolute top-1/2 right-0 z-10  text-white cursor-pointer" onClick={handleNext}><Arrow /></div> */}
            </div>
        </section>
    )
}

GamificationSection.displayName = "GamificationSection"

export default GamificationSection