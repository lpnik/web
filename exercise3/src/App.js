import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Products from './components/Products'
import ProductInfo from './components/Products.json'


function App() {
  return(
    <div className='App'>
      <br />
      <h1>Tuli gorre, jäi kaikki kesken</h1>
      <SearchBar />
      <br />

      <div className='inner'>
        {
          ProductInfo && ProductInfo.map(product => {
            return(
              <div className='box'>
                { product.title }
                <img src={product.image} />
                <br />

                { product.type }
                { product.description }
                { product.price }

              </div>
            )
          })
        }

        </div>

      <br />
      <div> hiuhiu </div>
    </div>
  )
}

export default App;
