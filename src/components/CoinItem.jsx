import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import './CoinItem.css';
import { Link } from 'react-router-dom';

const CoinItem = ({ coin }) => {
  return (
    <tr>
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${coin.id}`}>
        <div className="coin-container">
          <img src={coin.image} alt={coin.id} />
          <p>{coin.name}</p>
        </div>

        </Link>
        
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0 ? (
          <p className='text-green'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className='text-red'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="volume">${coin.total_volume.toLocaleString()}</td>
      <td className="market-cap">${coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
