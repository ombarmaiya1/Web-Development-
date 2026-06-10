import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
    <div className="bg-sky-300 py-4 flex justify-between">
    <h1 className="text-2xl font-bold">LOGO</h1>
    <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contant-us'}>Contact Us</Link>
       
    </div>
    </div>
    </>
  )
}

export default Navbar