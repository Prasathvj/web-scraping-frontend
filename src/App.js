import { useEffect, useState } from 'react';
import './App.css';
import Base from './base/Base';
import Header from './header/Header';

function App() {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
  async function getProducts(){ 
    const response = await fetch("https://web-scraping-red.vercel.app/products",
    {method:'GET',})
    const data = await response.json();
    setProducts(data)

    //console.log(products)
  }
  getProducts();
},[]);

  return (
    <div className="App">
        <Base
        products={products}
        setProducts={setProducts}
        /> 
        <Header
        products={products}
        setProducts={setProducts}
        />    
    </div>
  );
}

export default App;
