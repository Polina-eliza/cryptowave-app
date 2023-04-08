import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../components/SavedCoin.css';

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  

  return (
    <div className='saved-coin-container'>
      {coins?.length === 0 ? (
        <p>
          You don't have any coins saved. Please save a coin to add it to your
          watch list. <Link to='/'>Click here to search coins.</Link>
        </p>
      ) : (
        <table className='saved-coin-table'>
          <thead>
            <tr>
              <th className='rank'>Rank #</th>
              <th className='coin'>Coin</th>
              <th className='remove'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id}>
                <td>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div>
                      <img className='coin-img' src={coin?.image}  alt='/' />
                      <div>
                        <p className='coin-name'>{coin?.name}</p>
                        <p className='coin-symbol'>
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <AiOutlineClose
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default SavedCoin