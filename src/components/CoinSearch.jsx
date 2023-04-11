import CoinItem from "./CoinItem";
import React, { useState } from 'react';
import './CoinSearch.css';

const CoinSearch = ({coins}) => {
  const [searchText, setSearchText] = useState('');

  const filteredCoins = coins.filter((coin) =>
    searchText === '' ? true : coin.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="coins-container">
      <div className="coins-wrapper">
        <h2 className="coins-header">Search Crypto</h2>
        <h3 className="coins-subheader">Crypto Dashboard</h3>
        <p className="coins-descr">Click on the coin's name to view all relevant information and stats. </p>
        <form>
        <input className="coin-input" onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='Search a coin'/>
        </form>
      </div>

      <table className="table">
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
        {filteredCoins.map((coin) => (
            <CoinItem key={coin.id} coin={coin} />
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch