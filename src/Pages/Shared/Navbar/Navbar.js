import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(err => console.error(err))
  } 

  const NavItems = (
    <>
      <li className="font-bold capitalize">
        <Link to={`/`}>Home</Link>
      </li>
      <li className="font-bold capitalize">
        <Link to={`/ourportfolio`}>our portfolio</Link>
      </li>
      <li className="font-bold capitalize">
        <Link to={`/ourteam`}>our team</Link>
      </li>
      <li className="font-bold capitalize">
        <Link to={`/contactus`}>contact us</Link>
      </li>
      {user?.uid ? (
        <li className="font-bold capitalize">
          <button onClick={handleLogOut}>logout</button>
        </li>
      ) : (
        <li className="font-bold capitalize">
          <Link to={`/login`}>Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{NavItems}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Get started</Link>
      </div>
    </div>
  );
};

export default Navbar;
