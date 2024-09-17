import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import './App.css';

function App() {
  const [products, setProducts] = React.useState([]);

  const getProducts = () => {
    const api = 'https://fakestoreapi.com/products';
    axios.get(api)
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <button className="fetch- btn" onClick={getProducts}>Call Product API</button>
      <Card products={products}/>
    </>
  );
}

export default App;
