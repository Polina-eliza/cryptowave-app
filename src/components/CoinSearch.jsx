import CoinItem from "./CoinItem";
import React, { useState } from 'react';

const CoinSearch = ({coins}) => {
  const [searchText, setSearchText] = useState('');


  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Search a coin'/>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
        {coins
            .filter((value) => {
              if (searchText === '') {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            }).map((coin) => (
            <CoinItem key={coin.id} coin={coin} />
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch