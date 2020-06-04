import React, { useState } from 'react';
import './App';
import fetchWeather from './API/fetchWeather';
const App = () => {
  const [query, setQuery] = useState('');
  // const [weather,setWeather]=useState();
  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      console.log(data);
    }
  };
  return (
    <div className='main-container'>
      <input
        type='text'
        onChange={(e) => setQuery(e.target.value)}
        placeholder='search...'
        onKeyPress={search}
      />
    </div>
  );
};
export default App;
