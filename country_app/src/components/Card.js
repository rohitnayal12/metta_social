
import React from 'react';
import "./Card.css"


const Card = ({ name, capital, countryCode,continent }) => {
    const getFlagUrl = (code) => `https://flagsapi.com/${code}/flat/64.png`;
  
    return (
      <div className="card"  >
        <img src={getFlagUrl(countryCode)} alt={name} className="flag-img" />
        <div>
          <h2>{name}</h2>
          <p>Capital: {capital}</p>
          <p>Continet :{continent[0]}</p>
          
        </div>
      </div>
    )
}


export default Card