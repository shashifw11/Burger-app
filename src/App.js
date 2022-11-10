import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom" ; 
import Product from './components/product/product';
import ProductId from './components/productId/productId';
import Navbar from './components/navbar/navbar';
import {Cart} from "./components/cart/cart"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Product/>}/>
        <Route path = "/:id" element={<ProductId/>}/>
        <Route path = "/cart" element={<Cart/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
