'use client'

import React, {FC} from 'react'
import HeroSection from './Partials/HeroSection'
import CityTurnsSection from './Partials/CityTurnsSection'
import HowToStorySection from './Partials/HowToStorySection'
import LocationsSection from './Partials/LocationsSection/LocationsSection'
import GallerySection from './Partials/GallerySection'
import WhoIsFeedGamesSection from './Partials/WhoIsFeedGamesSection'
import GamificationSection from './Partials/GamificationSection/GamificationSection'
import ApplicationsSection from './Partials/ApplicationsSection/ApplicationsSection'
import Seperator from '../../Seperator/Seperator'
import CharactersSection from './Partials/CharactersSection/CharactersSection'


const HomePageComp: FC = () => {
  return (
    <div>
      <HeroSection />
      <CityTurnsSection />
      <HowToStorySection/>
      <CharactersSection />
      <Seperator color='red' />
      <LocationsSection />
      <div className='red-gradient-bg relative'>
        <ApplicationsSection />
        <Seperator color='black' className='mt-12' />
        <GamificationSection />

      </div>
      <GallerySection/>
      <WhoIsFeedGamesSection/>
    </div>
  )
}

HomePageComp.displayName = "HomePageComp"


export default HomePageComp
