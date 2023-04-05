import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import './CoinItem.css';

const CoinItem = ({ coin }) => {
  return (
    <tr>
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td>
        <div className="coin-container">
          <img src={coin.image} alt={coin.id} />
          <p>{coin.name}</p>
        </div>
      </td>
      <td>{coin.symbol}</td>
      <td>{coin.current_price}</td>
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
      <td className="volume">{coin.total_volume}</td>
      <td className="market-cap">{coin.market_cap}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
