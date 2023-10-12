import { UiImage, UiLink } from '@/app/utils/lib'
import React, { FC } from 'react'
import LogoWithWhiteText from '@/assets/Icons/logo-white-text.svg'
import MobileMenu from '../MobileMenu/MobileMenu'


const MobileHeader: FC = () => {
    return (
        <div className='container lg:hidden px-[26px] flex justify-between items-center'>
            <UiLink href={'/'}>
                <LogoWithWhiteText />
            </UiLink>
            <MobileMenu />
        </div>
    )
}

export default MobileHeader