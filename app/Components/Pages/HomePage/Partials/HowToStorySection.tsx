'use client'
import React, { FC } from 'react'
import { UiImage } from '@/app/utils/lib'
import Button from '@/app/Components/Buttons/Button'
import Play from '@/assets/Icons/Play.svg'
const Fade = require("react-reveal/Fade")

const HowToStorySection: FC = () => {
    return (
        <Fade bottom>
            <div className='w-full lg:h-[500px] bg-gradient-to-r from-[#B93234] to-[#5A2730] pb-[63px] lg:pb-0 pt-[26px] lg:pt-0'>
                <div className='container h-full flex flex-col-reverse lg:flex-row px-6 lg:px-0'>
                     {/* bottuns for showing on mobile screens */}
                     <Fade right cascade>
                            <div className='flex lg:hidden lg:mt-6 mt-11 lg:ml-10'>
                                <div className='w-full flex justify-between'>
                                    <Button
                                        Name={'WATCH TRAILER'}
                                        ButtonStyle={'w-40 px-3 py-4 flex items-center rounded-3xl text-xs font-medium bg-gradient-to-r from-[#6E7A8A] to-[rgba(0,0,0,0.5)] text-white'}
                                        Icon={<Play className="text-gray ml-[0.2rem]" />}
                                        IconStyle={`flex justify-center items-center bg-white w-4 h-4 rounded-full ml-3`}
                                    />
                                </div>
                                <div className=''>
                                    <Button
                                        Name={'BUY NOW'}
                                        ButtonStyle={'w-40 flex justify-center px-3 py-4 flex items-center rounded-3xl text-xs font-medium bg-gradient-to-r from-[#D33535] to-[rgba(211,53,53,0.7)]  text-white'}
                                        Icon={<Play className="text-primary ml-[0.1rem]" />}
                                        IconStyle={`flex justify-center items-center bg-white w-4 h-4 rounded-full ml-3`}
                                    />
                                </div>

                            </div>
                        </Fade>
                    <div className='relative flex justify-center items-center mt-6 lg:mt-0'>
                        <div className='relative lg:ml-20 mt-[26px] lg:mt-0 bg-gradient-to-r from-[#5A2730] to-[#B93234] rounded-3xl p-1'>

                            <UiImage
                                width={713}
                                height="0"
                                src='https://dream-city-bucket.s3.eu-central-1.amazonaws.com/HowToStory.png'
                                alt='Team'
                                priority
                                quality={50}
                                className='rounded-3xl'
                            />
                            <div className='absolute w-full h-full top-0 left-0 z-10 flex justify-center items-center'>
                                <UiImage
                                    width={94}
                                    height="0"
                                    src='https://dream-city-bucket.s3.eu-central-1.amazonaws.com/playbutton.png'
                                    alt='play button'
                                    priority
                                    quality={50}
                                    className='!w-[51px] md:!w-[94px] !h-[51px] md:!h-[94px] rounded-3xl'
                                />
                            </div>


                        </div>
                    </div>
                    <div className='text-white flex lg:inline-block flex-col items-center'>
                        <div className='lg:mt-32 lg:ml-10 text-center lg:text-start'>
                            <h5 className='text-2xl lg:text-3xl font-medium'>
                                <Fade cascade left>
                                    HOW THE STORY

                                </Fade>
                            </h5>
                            <div className='text-2xl lg:text-3xl text-primary font-medium mt-3'>
                                <Fade cascade left>
                                    BEGAN
                                </Fade>
                            </div>
                        </div>
                        <div className='w-64 ml-10 mt-6 lg:mt-4 text-sm font-light text-center lg:text-start'>
                            <Fade cascade left>
                                The game follows the story of a high school student who has experienced a traumatic event in his life.

                            </Fade>
                        </div>
                        <Fade right cascade>
                            <div className='hidden lg:flex mt-11 lg:ml-10'>
                                <div className='mr-8'>
                                    <Button
                                        Name={'WATCH TRAILER'}
                                        ButtonStyle={'w-40 px-3 py-4 flex items-center rounded-3xl text-xs font-medium bg-gradient-to-r from-[#6E7A8A] to-[rgba(0,0,0,0.5)]'}
                                        Icon={<Play className="text-gray ml-[0.2rem]" />}
                                        IconStyle={`flex justify-center items-center bg-white w-4 h-4 rounded-full ml-3`}
                                    />
                                </div>
                                <div className=''>
                                    <Button
                                        Name={'BUY NOW'}
                                        ButtonStyle={'w-40 flex justify-center px-3 py-4 flex items-center rounded-3xl text-xs font-medium bg-gradient-to-r from-[#D33535] to-[rgba(211,53,53,0.7)]'}
                                        Icon={<Play className="text-primary ml-[0.1rem]" />}
                                        IconStyle={`flex justify-center items-center bg-white w-4 h-4 rounded-full ml-3`}
                                    />
                                </div>

                            </div>
                        </Fade>
                       
                    </div>
                </div>
            </div>

        </Fade>
    )
}

HowToStorySection.displayName = "HowToStorySection"
export default HowToStorySection
