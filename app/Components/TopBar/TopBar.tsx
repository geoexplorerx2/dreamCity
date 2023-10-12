'use client'
import React, { FC } from 'react'
import Button from '../Buttons/Button'
import Play from '@/assets/Icons/Play.svg'
import { UiImage } from '@/app/utils/lib'
const TopBar: FC = () => {
    return (
        <div className='w-full h-[50px] hidden lg:flex justify-center bg-gradient-to-r from-[#09101E] to-[#0C1C2B]'>
            <div className='container flex justify-between'>
                <div className='w-28 ml-24 flex items-center'>
                    <UiImage
                        width={112}
                        height="0"
                        src='https://dream-city-bucket.s3.eu-central-1.amazonaws.com/feedgameslogo.png'
                        alt='Logo'
                        priority
                        quality={75}
                    />
                </div>
                <div className='mr-20 flex items-center'>
                    {/* <div>
                        <Button
                            Name={'Sign in'}
                            ButtonStyle={'w-20 h-6 py-2 px-3 rounded-2xl flex justify-center items-center text-xs text-[#fff]'}
                        />
                    </div>
                    <div className='pl-4'>
                        <Button
                            Name={'Sign up'}
                            ButtonStyle={'w-20 h-6 py-2 px-3 rounded-2xl flex justify-center items-center text-xs bg-[#2D3847] text-[#D33535]'}

                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
TopBar.displayName = "TopBar"
export default TopBar
