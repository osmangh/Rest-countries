import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country)
    const{population,area,name,capital,region,flags}=props.country;
    return (
        <div className='country'>
           
          <h1> Country name:{name.common}</h1>
          <h2>population:{population}</h2>
          <img src={flags.png} alt="" />
           <p>capital:{capital}</p>
           <h3>area:{area}</h3>
           <p><small>region:{region}</small></p>
        </div>
    );
};

export default Country;