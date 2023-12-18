import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
import Upcoming from './upcoming/Upcoming'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      <Upcoming/>
    </div>
  )
}

export default Home