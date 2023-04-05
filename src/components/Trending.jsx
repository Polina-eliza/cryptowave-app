import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../components/Trending.css";

const Trending = () => {
    const [trending, setTrending] = useState([]);

    const url ='https://api.coingecko.com/api/v3/search/trending';


    useEffect(() => {
        axios.get(url).then((response) => {
          setTrending(response.data.coins);
        });
      }, []);


  return (
    <div className='trending-container'>
        <h2 className='trending-subtitle'>Trending Coins</h2>
        <div className='coins-grid'>
            {trending.map((coin) => (
                <div className='coin-wrapper'>
                    <div className='individual-wrapper'>
                    <div className='left-wrapper'>
                        <img className='coin-img' src={coin.item.small} alt="/" />
                        <div className='coin-name'>
                            <p>{coin.item.name}</p>
                            <p>{coin.item.symbol}</p>
                        </div>
                    </div>
                    </div>
                    <img className='btc-img' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="/" />
                    <p className='btc-price'>{coin.item.price_btc.toFixed(7)}</p>
                </div>

            ))}
        </div>
    </div>
  )
}

export default Trending