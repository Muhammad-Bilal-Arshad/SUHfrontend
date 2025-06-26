
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Cart from './pages/Cart.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mens" element={<ShopCategory category = "men"/>} />
           <Route path="/womens" element={<ShopCategory category = "women"/>} />
            <Route path="/kids" element={<ShopCategory category = "kid"/>} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
        </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
