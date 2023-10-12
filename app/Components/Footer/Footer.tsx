
import React, { FC } from 'react'
import { UiImage } from '@/app/utils/lib'
import Logo from '@/assets/Icons/Logo.svg'
import LogoMoile from '@/assets/logos/logo-mobile-footer.svg'
import { items } from '@/app/utils/lib/data'
import SocialMedia from '@/assets/Icons/socialMedia.svg'
const Footer: FC = () => {
    return (
        <div className='w-full bg-gradient-to-r from-[#0C1C2B] to-[#09101E]'>
            <div className='container lg:h-[300px] pb-6 lg:pb-0'>
                <div className='w-full flex justify-center'>
                    <div className='hidden lg:inline-block lg:w-72 mt-3'>
                        <Logo />
                    </div>
                    <div className='inline-block lg:hidden w-[137px] lg:w-72 mt-3'>
                        <LogoMoile />
                    </div>
                </div>
                <div className='w-full mt-7 text-white'>
                    <ul className='w-full flex flex-col lg:flex-row justify-between items-center lg:items-start lg:px-80 space-y-[10px] lg:space-y-0'>
                        {items.map((item, index) => (
                            index !== 3 ? <li key={index} className='text-[10px] font-medium'>{item.item}</li> : ''
                        ))}
                    </ul>
                </div>
                <div className='w-full flex justify-center mt-11 mb-6 lg:mb-6'>
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}
Footer.displayName = "Footer"
export default Footer
