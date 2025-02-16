import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);
  
  const API_KEY = process.env.REACT_APP_API_KEY; 

  // Fetch data using Axios request in useEffect
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://openapiv1.coinstats.app/coins',
      headers: {
        accept: 'application/json',
        'X-API-KEY': API_KEY,  // Pass the API key in the header
      },
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setCrypto(res.data.result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [API_KEY]);

  return (
    <div className='App'>
      <h1 className='title'>Cryptocurrency Finder</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search with small letters'
        type="text"
      />
      {/* Cryptocurrencies */}
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
          </tr>
        </thead>
        {/* Table body with filter */}
        <tbody>
  {crypto && crypto
    .filter((val) => val.name.toLowerCase().includes(search))
    .map((value, id) => (
      <tr key={id}>
        <td className='rank'>{value.rank}</td>
        <td className="logo">
          <a href={value.websiteUrl} target="_blank" rel="noopener noreferrer">
            <img 
              src={value.icon} 
              alt={`${value.name} logo`} 
              width="30px"
            />
          </a>
          <p>{value.name}</p>
        </td>
        <td className='symbol'>{value.symbol}</td>
        <td className='marketCap'>${Math.round(value.marketCap).toLocaleString()}</td>
        <td className='price'>${value.price.toFixed(2)}</td>
        <td className='availableSupply'>{value.availableSupply ? value.availableSupply.toLocaleString() : 'N/A'}</td>
      </tr>
    ))}
</tbody>
      </table>
    </div>
  );
}

export default App;
