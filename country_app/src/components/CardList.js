import React from 'react'
import Card from './Card';
  

import imgg from "./img/nodatafound.png"

const CardList = ({ countries }) => {

    const containerstyle={
        
         display:"grid",
         gridTemplateColumns:"repeat(3,1fr)",
         gap:"10px"
    }

    console.log(countries)
    return (
      <div  >
        {countries.length==0?<img width={"50%"} src={imgg} />:<div style={containerstyle} className="card-list"> {countries.map((country) => (
         
         <Card key={country.cca2} name={country.name.common} capital={country.capital} countryCode={country.cca2} continent={country.continents}  />
         
        ))}  </div>}
    
      </div>
    );
}

export default CardList