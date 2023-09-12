import logoSvg from "../assets/images/phorm-01.svg";
import ImageRaft from "./ImageRaft";
import { LogoSVG } from "../assets/styles/NavBarstyles";
import {Link} from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <header className="py-7">
      <div className="mx-auto max-w-7xl flex items-center justify-between h-10">
        <div className="flex gap-6 items-center">
          <LogoSVG src={logoSvg} />
          <ImageRaft />
        </div>

        <div className="flex justify-between gap-5 items-center">
          <a href="#" className="text-sm font-bold hover:text-gray-300 text-slate-800">
            Templates
          </a>
          <a href="#" className="text-sm font-bold hover:text-gray-300 text-slate-800">
            Components
          </a>
          <a href="#" className="text-sm font-bold hover:text-gray-300 text-slate-800">
            Pricing
          </a>
        </div>
        <div className="flex justify-between gap-8 items-center">
          <Link to={'/login'} className="text-sm font-bold hover:text-gray-300">
            Sign in
          </Link>
          <a
            href="#"
            className="text-sm px-4 bg-slate-800 py-2 rounded text-white font-bold flex gap-1 justify-center items-center"
          >
            Get all-access
            <svg
              className="arrow"
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 7L15 12L10 17"
                stroke="currentColor"
                stroke-width="4.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
