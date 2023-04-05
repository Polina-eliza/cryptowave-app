import React from 'react'
import CoinSearch from '../components/CoinSearch';
import Hero from "../components/Hero";
import Trending from '../components/Trending';

const Home = ({coins}) => {
  return (
    <div>
      <Hero />
        <CoinSearch coins={coins} />
        <Trending />
    </div>
  )
}

export default Home;