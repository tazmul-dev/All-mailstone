
import React from 'react';
import './country.css'

const Country = ({country}) => {
//     console.log(country.area.area
// )

const hendeler = ()=>{
    console.log('visited')
}
    return (
        <div className='country'>
         <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
           <p>Region: {country.region.region}</p>
          <p>Area: {country.area.area} {country.area.area > 300000 ? "Big country": "small country"} </p>
          <button onClick={hendeler}>Not visited</button>

        </div>
    );
};

export default Country;