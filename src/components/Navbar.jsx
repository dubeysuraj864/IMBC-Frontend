import {ImSearch} from "react-icons/im"
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between p-4  lg:mx-20">
        <div className="flex items-center">
      <Link to="/">
      <span className="logo bg-yellow-500 text-black font-bold p-2 rounded mx-4">IMBC</span>
      </Link>
        <span className="search mx-4 bg-white p-2 rounded sm:flex items-center justify-center hidden ">
            <span className="text-black mr-2"><ImSearch/></span>
          <input type="search" className="outline-none border-none text-black"  placeholder="Search..." />
        </span>
        <div className="nav-links hidden sm:block">
          <Link className="mx-2">All</Link>
          <Link className="mx-2">Actor</Link>
          <Link className="mx-2">Movie</Link>
          <Link className="mx-2">Producer</Link>
         
        </div>
        </div>
      
      <div>
      <button className="mx-4">Watchlist</button>
       <Link to="/sign-in"> <button className="mx-4">Sign In</button></Link>
      </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Navbar;
