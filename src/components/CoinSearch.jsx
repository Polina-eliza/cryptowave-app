import React from 'react'

const CoinSearch = ({coins}) => {
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
        <input type="text" placeholder='Search a coin'/>
        </form>
      </div>

      <table>
        <thread>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thread>
        <tbody>
          {coins.map((coin) => (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

    
            </tr>
          ))}

        </tbody>
      </table>





    </div>
  )
}

export default CoinSearch