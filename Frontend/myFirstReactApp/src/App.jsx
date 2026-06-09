// import React from 'react'

import Header from "./components/Header";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/about" element={<About/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
