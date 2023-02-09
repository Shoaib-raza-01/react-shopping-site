import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/cart" element = {<Cart />} />
        <Route path='/products/:id' element = {<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
