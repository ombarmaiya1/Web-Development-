import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <ProductCard {...product} />
       <ProductCard {...product} />
        <ProductCard {...product} />
         <ProductCard {...product} />
        <Routes>
          <Route  path="/" element={<Navbar />}/>
          <Route  path="/home" element={<Navbar />}/>
          <Route  path="/about" element={<Navbar />}/>
          <Route  path="/contact-us" element={<Navbar />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
