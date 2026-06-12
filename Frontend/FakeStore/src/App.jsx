import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";

function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <ProductPage/>
        <Routes>
          
          <Route  path="/" element={<Navbar/>}/>
          <Route  path="/home" element={<Navbar />}/>
          <Route  path="/about" element={<Navbar />}/>
          <Route  path="/contact-us" element={<Navbar />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
