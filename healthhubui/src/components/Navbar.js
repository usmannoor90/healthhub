import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white fixed w-100 block min-w-[100%] ">
      <div className="container mx-auto flex justify-between items-center py-2 ">
        <Link to="/" className="text-xl font-bold">
          HealthHub
        </Link>
        <div className="md:hidden relative ">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex md:space-x-4  md:relative absolute md:top-0 top-10 md:right-0 right-4 md:bg-transparent bg-white md:text-white text-black md:p-0 px-4 pt-1 pb-2 [&>a]:md:mt-0 [&>a]:mt-3 rounded-lg [&>a]:block  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <NavLink
            to="/"
            className={(active) =>
              active.isActive
                ? " text-[20px] font-extrabold leading-[25px] tracking-normal text-left text-white capitalize"
                : " text-[20px] font-extralight leading-[25px] tracking-normal text-left text-white capitalize"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={(active) =>
              active.isActive
                ? " text-[20px] font-extrabold leading-[25px] tracking-normal text-left text-white capitalize"
                : " text-[20px] font-extralight leading-[25px] tracking-normal text-left text-white capitalize"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={(active) =>
              active.isActive
                ? " text-[20px] font-extrabold leading-[25px] tracking-normal text-left text-white capitalize"
                : " text-[20px] font-extralight leading-[25px] tracking-normal text-left text-white capitalize"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={(active) =>
              active.isActive
                ? " text-[20px] font-extrabold leading-[25px] tracking-normal text-left text-white capitalize"
                : " text-[20px] font-extralight leading-[25px] tracking-normal text-left text-white capitalize"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
