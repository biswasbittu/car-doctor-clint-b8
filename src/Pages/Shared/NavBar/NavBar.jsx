import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const NavBar = () => {
  const menuItems = (
    <>
      <li className="font-semibold text-lg">
        <Link to="/">Home </Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to="/"> About </Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to="/">Services </Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to="/">Blog</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to="/">Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="  text-xl">
            <img src={logo} alt="" className="h-14" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="font-semibold border-2 border-customButtonColor text-customButtonColor px-4 py-2 rounded hover:bg-customButtonColor hover:text-white transition-colors duration-300">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
