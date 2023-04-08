import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import About from './routes/About';
import Pricing from './routes/Pricing';
import Contact from './routes/Contact';
import CoinPage from './routes/CoinPage';
import axios from "axios";
import Footer from "./components/Footer";
import { AuthContextProvider } from './context/AuthContext';


function App() {

  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en';

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);


  return (
      <AuthContextProvider>
        <div>
      <div className="app-container">
     <Navbar />
     <Routes>
      <Route path='/' element={<Home coins={coins}/>} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/account' element={<Account />} />
      <Route path='/about' element={<About />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/coin/:coinId' element={<CoinPage />} />
      <Route path=':coinId' />
     </Routes>
     <Footer />
    </div>
    </div>
      </AuthContextProvider>
     
  );
}

export default App;
