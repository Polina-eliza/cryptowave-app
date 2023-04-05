import React from 'react'
import Benefits from '../components/Benefits';
import CoinSearch from '../components/CoinSearch';
import Hero from "../components/Hero";
import Trending from '../components/Trending';
import Portfolio from '../components/Portfolio';

const Home = ({coins}) => {
  return (
    <div>
      <Hero />
        <CoinSearch coins={coins} />
        <Benefits />
        <Portfolio />
        <Trending />
    </div>
  )
}

export default Home;