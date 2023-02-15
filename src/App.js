import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import { CartProvider } from "react-use-cart";
import BuyPage from "./Components/BuyPage";
import NotFoundPage from "./Components/NotFoundPage";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/cart" element = {<Cart />} />
        <Route path='/products/:id' element = {<Product />} />
        <Route path='/buy' element= {<BuyPage />} />
        <Route path='*' element= {<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
