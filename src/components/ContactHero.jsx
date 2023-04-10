import Message from '../assets/message.svg';
import Phone from '../assets/phone.svg';
import Email from '../assets/email.svg';
import '../components/ContactHero.css';

const ContactHero = () => {
  return (
    <div className='contact-hero'>
      <hr color='grey' opacity='1' size='1' width='100%' />
      <div className='contact-hero-container'>
        <div className="left-container-contact">
          <div className="header-wrapper">
          <h1 className='header header-contact'>Get <span>In Touch</span></h1>
          <img src={Message} alt="message" />
          </div>
          <p className='hero-descr hero-descr-contact'> The Cryptop Token is the key to unlocking the full potential of Cryptop. Get even higher earning rates and our lowest borrowing rates.</p>
        </div>
        <div className="right-container-contact">
          <div className="contact-wrapper">
            <img src={Phone} alt="phone" />
            <div className="phone">
              Phone <br />
              +447729759321
            </div>
          </div>
          <div className="contact-wrapper">
            <img src={Email} alt="email" />
            <div className="email">
              Email <br />
              support@cryptowave.com
            </div>
          </div>
        </div>
        </div>
       

    </div>
  )
}

export default ContactHero