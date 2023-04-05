import '../components/Portfolio.css';
import Wallet from '../assets/wallet.svg';
import Pay from '../assets/pay.svg';
import Coin from '../assets/coins.svg';


const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h2 className='portfolio-subheading'>Invest & Grow Your Cryptocurrency <span>Portfolio</span></h2>
      <div className='cards-container'>
        <div className='card card-left'>
          <h3 className='heading'>More than a typical crypto wallet</h3>
          <div className='subheading'>
           Unlock the full potential of your digital assets
           </div>
          <img src={Wallet} alt="wallet" />
        </div>
        <div className='card card-center'>
        <img src={Pay} alt="phone" />
          <h3 className='heading'>Grow your business with Binance Pay</h3>
          <div className='subheading'>
          The next generation of cryptocurrency storage
           </div>
        </div>
        <div className='card card-right'>
          <h3 className='heading'>A crypto wallet from the future</h3>
          <div className='subheading'>
          The smartest way to manage your digital wealth
           </div>
          <img src={Coin} alt="coin" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio