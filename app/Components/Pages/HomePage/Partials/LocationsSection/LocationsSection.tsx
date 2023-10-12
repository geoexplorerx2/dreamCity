import { useIsTablet } from '@/app/utils/hooks'
import React, { FC } from 'react'
import LocationsSectionDesktop from './LocationsSectionDesktop'
import LocationsSectionMobile from './LocationsSectionMobile'

const LocationsSection:FC = () => {
    const isTablet = useIsTablet()
  return (
    <div className='w-full'>
        <div className='hidden lg:inline-block w-full'><LocationsSectionDesktop /></div>
        <div className='inline-block lg:hidden w-full'><LocationsSectionMobile/> </div>
    </div>
  )
}

export default LocationsSection