import React from 'react'
import Benefits from '../components/Benefits';
import CoinSearch from '../components/CoinSearch';
import HomeHero from "../components/HomeHero";
import Trending from '../components/Trending';
import Portfolio from '../components/Portfolio';
import CallToAction from '../components/CallToAction';
import Banner from '../components/Banner';

const Home = ({coins}) => {
  return (
    <div>
      <HomeHero />
        <CoinSearch coins={coins} />
        <Benefits />
        <Portfolio />
        <CallToAction />
        <Trending />
        <Banner />
    </div>
  )
}

export default Home;