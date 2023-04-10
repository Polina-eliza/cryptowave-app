import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../components/SavedCoin.css';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';

const SavedCoin = () => {
  const [coins, setCoins] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList);
    });
  }, [user?.email]);

  const coinPath = doc(db, 'users', `${user?.email}`);
  const deleteCoin = async (passedid) => {
    try {
      const result = coins.filter((item) => item.id !== passedid);
      await updateDoc(coinPath, {
        watchList: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  

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
            <tr className='saved-list'>
              <th className='saved-item'>Rank #</th>
              <th className='saved-item'>Coin</th>
              <th className='saved-item'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin) => (
              <tr key={coin.id}>
                <td className=''>{coin?.rank}</td>
                <td>
                  <Link to={`/coin/${coin.id}`}>
                    <div>
                      <img className='coin-img' src={coin?.image}  alt='/' />
                      <div>
                        <p className='coin-symbol'>
                          {coin?.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td>
                  <AiOutlineClose
                  onClick={() => deleteCoin(coin.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoin