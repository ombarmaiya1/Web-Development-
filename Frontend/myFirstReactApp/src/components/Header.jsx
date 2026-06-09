// import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <div className="d-flex bg-dark justify-content-around align-items-center">
        <div className=" text-primary fs-3 fw-bold p-2">My Company</div>
      <div className="d-flex gap-4 p-2 text-light">
      <Link to={"/"} className="d-flex gap-1"> <FaHome className="fs-4"/>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/contact-us"}>Contact Us</Link>
      </div>
      <div className="d-flex gap-2 p-2">
        <Link to={'/login'}><button className="btn btn-outline-primary">Login</button></Link>
        <Link to={'/signup'}><button className="btn btn-primary">Sign Up</button></Link>
      </div>
      </div>
    </>
  );
}

export default Header;
