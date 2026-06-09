import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"

function App() {

  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="*" element={<NotFound/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
