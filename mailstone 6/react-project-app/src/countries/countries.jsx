import React, { use } from 'react';
import Country from '../country/country';
import './countries.css'

const Countries = ({countriesApi}) => {
  const Data = use(countriesApi);
 const Countries = Data.countries;

    return (
        <div>
            <h1>In the countries: {Countries.length}</h1>

            <div className='countries'>
                {
                    Countries.map(country=> <Country country={country}></Country>)
                }
            </div>
        
        </div>
      
    );
};

export default Countries;