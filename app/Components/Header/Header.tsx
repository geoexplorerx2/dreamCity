import React, { FC } from 'react'
import { items } from '@/app/utils/lib/data'
import { UiImage, UiLink } from '@/app/utils/lib'
import MobileHeader from '../MobileHeader/MobileHeader'
const Header: FC = () => {

  return (
    <>
      <div className='w-full hidden lg:flex justify-center h-14 bg-white'>
        <div className='container h-full px-44'>
          <ul className='w-full h-full flex items-center justify-between'>
            {
              items.map((item, index) => (
                <li key={index}>{index == 3 ? <>
                  {/* <img className={} src={} /> */}
                  <UiLink href={'/'}>
                    <UiImage
                      width="128"
                      height="0"
                      src={item.item}
                      alt='Header Logo'
                      priority
                      quality={75}
                    />
                  </UiLink>
                </> : <UiLink href={item.href} className={item.class}>{item.item}</UiLink>}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <MobileHeader />
    </>
  )
}

Header.displayName = "Header"
export default Header
