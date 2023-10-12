import React, { FC } from 'react'
import { gallery } from '@/app/utils/lib/data'
import { UiImage } from '@/app/utils/lib'
const Fade = require("react-reveal/Fade")


const GallerySection: FC = () => {
    return (
        // <Fade bottom>
            <div className='w-full bg-gradient-to-r from-[#09101E] to-[#0C1C2B]'>
                <div className='container h-full px-3 lg:px-32 pt-7'>
                    <Fade bottom cascade>
                        <div className='w-full lg:min-h-[682px] grid grid-cols-2 md:grid-cols-3 gap-[10px] lg:gap-8'>
                            {
                                gallery.map((item, index) => (
                                    <div key={item.id} className='w-[180px] lg:w-full flex justify-center relative aspect-square'>
                                        <div className='absolute z-0 w-full h-full'>
                                            <UiImage
                                                fill
                                                src={item.src}
                                                alt='Slide Cover'
                                                priority
                                                quality={75}
                                                className='z-10'
                                            />
                                        </div>
                                        {/* <div className='absolute z-10 w-full h-full'>
                                            <UiImage
                                                fill
                                                src='https://dream-city-bucket.s3.eu-central-1.amazonaws.com/slideCover.png'
                                                alt='Slide Cover'
                                                priority
                                                quality={75}
                                                className='z-10'
                                            />
                                        </div> */}
                                    </div>
                                ))
                            }
                        </div>

                    </Fade>
                    <div className='w-full h-14 flex justify-center items-center'>
                        <div className='w-full h-[2px]' style={{ "background": "radial-gradient(50% 50.00% at 50% 50.00%,#D33535 0%,rgba(211,53,53,0.00) 100%)" }}></div>
                    </div>
                </div>
            </div>

        // </Fade>
    )
}
GallerySection.displayName = "GallerySection"
export default GallerySection
