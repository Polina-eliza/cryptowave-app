import CoinItem from "./CoinItem";
import React, { useState } from 'react';
import './CoinSearch.css';

const CoinSearch = ({coins}) => {
  const [searchText, setSearchText] = useState('');


  return (
    <div className="coins-container">
      <div className="coins-wrapper">
        <h2 className="coins-header">Search Crypto</h2>
        <h3 className="coins-subheader">Crypto Dashboard</h3>
        <form>
        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Search a coin'/>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th className="coin">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="volume">24h Volume</th>
            <th className="mkt">Mkt</th>
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