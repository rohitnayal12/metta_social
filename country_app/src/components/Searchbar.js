import React, { useEffect, useState } from 'react';
import CardList from './CardList';
import axios from 'axios';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      if (searchTerm === '') {
        const res = await axios.get(`https://restcountries.com/v3.1/all`);
        setCountries(res.data);
      } else {
        const res = await axios.get(
          `https://restcountries.com/v3.1/currency/${searchTerm}`
        );
        setCountries(res.data);
      }
    } catch (error) {
      setCountries([]);
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchTerm]);

  return (
    <div style={{ width: '100%' }} className="search-container">
      <input
        type="text"
        placeholder="Enter text "
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div style={{ width: '100%',marginTop:"40px" }}>
        <CardList countries={countries} />
      </div>
    </div>
  );
};

export default Searchbar;
