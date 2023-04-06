import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import '../routes/CoinPage.css';

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const params = useParams()

  const url =  `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;


  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);



  return (
    <div className='coinpage'>
      <div className='coin-title-container'>
        <img src={coin.image?.large} alt="/" />
        <div className='coin-descr-wrapper'>
        <p className='coin-name'>{coin?.name} price</p>
        <p>{coin.symbol?.toUpperCase()} / USD</p>
        </div>
      </div>

      <div className='coin-container-top'>
        <div className='coin-container-left'>
          <div className='seven-days-wrapper'>
          {coin.market_data?.current_price ? (
              <p className='current-price'>${coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p className='seven-days'>7 Days</p>
          </div>
          <div className='graph-wrapper'>
          <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal' />
          </Sparklines>
          </div>
          <div className='data-wrapper'>
          <div>
          <p className='data-heading'>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
          </div>
          <div>
          <p className='data-heading'>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
          </div>
        </div>

        <div className='data-wrapper'>
          <div>
          <p className='data-heading'>24h High</p>
              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
          </div>
          <div>
          <p className='data-heading'>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
          </div>
        </div>
      </div>

      <div className='coin-container-left'>
          <p className='data-heading'>Market Stats</p>
          <div className='data-wrapper'>
            <div>
              <p className='data-heading'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='data-heading'>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
            </div>
            <div>
              <p className='data-heading'>Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
            </div>
          </div>

          <div className='data-wrapper'>
            <div>
              <p className='data-heading'>Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='data-heading'>Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p className='data-heading'>Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>

          <div className='data-wrapper'>
            <div>
              <p className='data-heading'>Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='data-heading'>Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p className='data-heading'>Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>
          <div className='social-container'>
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='coin-descr-container'>
        <p className='coin-about-title'>About {coin.name}</p>
        <p className='coin-about-text' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
      </div>
    </div>
  );
};

export default CoinPage