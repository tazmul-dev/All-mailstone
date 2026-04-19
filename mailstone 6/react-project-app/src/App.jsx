
import { Suspense } from 'react'
import './App.css'
import Countries from './countries/countries'
function App() {
  const CountriesApi = fetch('https://openapi.programming-hero.com/api/all')
 .then(res => res.json())
  return (
    <>
     
  <section className='section'>
 <Suspense fallback ={<p>countries loading .....</p>}>

  <Countries countriesApi ={CountriesApi}></Countries>
  
  </Suspense>
  </section>
        
       
      

    </>
  )
}

export default App
