import React from 'react'
import Landing from '../components/Landing'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Landing /> {/*HERO*/}
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  )
}

export default Home