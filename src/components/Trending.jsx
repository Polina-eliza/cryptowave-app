import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trending = () => {
    const [trending, setTrending] = useState([]);

    const url ='https://api.coingecko.com/api/v3/search/trending';


    useEffect(() => {
        axios.get(url).then((response) => {
          setTrending(response.data.coins);
        });
      }, []);


  return (
    <div className='trending'>
        <h2>Trending Coins</h2>

    </div>
  )
}

export default Trending