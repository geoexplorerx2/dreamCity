import { useIsTablet } from '@/app/utils/hooks'
import React, { FC } from 'react'
import CharactersSectionDesktop from './CharactersSectionDesktop'
import CharactersSectionMobile from './CharactersSectionMobile'

const CharactersSection:FC = () => {
    const isTablet = useIsTablet()
  return (
    <div className='w-full'>
        <div className='hidden lg:inline-block w-full'><CharactersSectionDesktop /></div>
        <div className='inline-block lg:hidden w-full'><CharactersSectionMobile/> </div>
    </div>
  )
}

export default CharactersSection