import { UiImage } from '@/app/utils/lib'
import React, { FC } from 'react'
const Fade = require("react-reveal/Fade")

const WhoIsFeedGamesSection: FC = () => {
    return (
        <div id='who-are-we' className='w-full bg-gradient-to-r from-[#09101E] to-[#0C1C2B]'>
            <div className='container h-full px-5 lg:px-32'>
                <div className='w-full text-white mb-14'>
                    <Fade bottom cascade>
                        <div className='w-full text-center text-3xl font-medium text-primary pt-1'>
                            Who is Feedgames ?
                        </div>
                    </Fade>
                    <div className='w-full flex justify-center mt-8'>
                        <Fade bottom cascade>
                            <p className='w-[619px] text-center text-sm font-light'>
                                Allow us to introduce ourselves! We are FeedGames Studio, an independent game development studio comprised of talented developers, designers, and storytellers with a passion for creating unforgettable gaming experiences.
                            </p>
                        </Fade>
                    </div>
                    <div className='w-full flex justify-center mt-8'>
                        <Fade bottom cascade>
                            <p className='w-[619px] text-center text-sm font-light'>
                                With years of experience in marketing and advertising for top brands around the world, we have brought our creativity, skills, and vision to the gaming industry. Our mission is to create captivating games that resonate with players and push the boundaries of innovation. Join us on our journey by following our social media channels and supporting our indie game development efforts.

                            </p>
                        </Fade>
                    </div>
                </div>
                <Fade bottom cascade>
                    <div className='w-full grid grid-cols-3 gap-8 mb-14'>


                        <div className='relative aspect-square border border-gray-400 rounded-[55px] overflow-hidden'>
                            <UiImage
                                fill
                                src={'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/locations/about-drema-city-section/DreamCity_Sirket-01.png'}
                                alt='dream-city studio'
                                priority
                                quality={75}
                                className='z-10'
                            />

                        </div>
                        <div className='relative aspect-square border border-gray-400 rounded-[55px] overflow-hidden'>
                            <UiImage
                                fill
                                src={'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/locations/about-drema-city-section/DreamCity_Sirket-02.png'}
                                alt='dream-city studio'
                                priority
                                quality={75}
                                className='z-10'
                            />

                        </div>
                        <div className='relative aspect-square border border-gray-400 rounded-[55px] overflow-hidden'>
                            <UiImage
                                fill
                                src={'https://dream-city-bucket.s3.eu-central-1.amazonaws.com/locations/about-drema-city-section/DreamCity_Sirket-03.png'}
                                alt='dream-city studio'
                                priority
                                quality={75}
                                className='z-10'
                            />

                        </div>

                    </div>

                </Fade>
            </div>
        </div>
    )
}
WhoIsFeedGamesSection.displayName = "WhoIsFeedGamesSection"
export default WhoIsFeedGamesSection
