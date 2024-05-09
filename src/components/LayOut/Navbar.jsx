 
import { Link } from "react-router-dom";
import logo from "../../assets/images/OriginalLogo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar px-3 lg:px-8 py-2 bg-base-100">
        <div className="flex-1">
          <div className="flex items-center ">
            <img src={logo} className="md:w-20 w-14" alt="" />
            <a className=" text-center font-Sedan font-semibold text-2xl md:text-4xl">Serve<span className= " text-orange-400">Sync</span></a>
          </div>
        </div>
        <div className="flex-none gap-2 ">
          <div className="md:flex hidden  gap-4 mr-12 space-x-2">
            <Link to='/'>
              <a className="text-xl font-Sedan ">Home</a>
            </Link>
            <div>
              <a className="text-xl font-Sedan ">Need_Volunteer</a>
            </div>
            <div>
              <a className="text-xl font-Sedan ">My_Profile</a>
            </div>
            {/* <div>
              <a>Login</a>
            </div> */}
          </div>
          <div className="md:hidden dropdown ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36 "
            >
              <Link to='/'>
                <a>Home</a>
              </Link>
              <li>
                <a>Need Volunteer</a>
              </li>
              <li>
                <a>My Profile</a>
              </li> 
            </ul>
          </div>
            <Link to='/login'>
              <a className="bg-orange-500 px-5 py-2 rounded text-white font-semibold ">Login</a>
            </Link>
          <div className="dropdown hidden dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
