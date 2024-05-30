import { Link } from "react-router-dom";
import logo from "../../assets/images/OriginalLogo.png";
import { useEffect, useState } from "react"; 
import useAuth from "../Hook/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const hundleToggle = (e) => {
    if (e.target.checked) {
      setTheme("luxury");
    } else {
      setTheme("light");
    }
  };
  // console.log(theme);
  // console.log(user);
  return (
    <div>
      <div className="navbar px-3 shadow-md lg:px-8 py-2 bg-base-100">
        <div className="flex-1">
          <div className="flex items-center ">
            <img src={logo} className="md:w-20 w-14" alt="" />
            <a className=" text-center font-Sedan font-semibold text-2xl md:text-4xl">
              Serve<span className=" text-orange-400">Sync</span>
            </a>
          </div>
        </div>
        <div className="flex-none gap-2 ">
          <ul className="menu menu-horizontal hidden md:flex space-x-2  px-6">
            <li>
              {" "}
              <Link to="/">
                <a className="text-[18px] font-Sedan ">Home</a>
              </Link>
            </li>
            <li>
              <Link to='/need-volunteer-page'>
                 <a className="text-[18px] font-Sedan ">Need_Volunteer</a>
              </Link> 
            </li>
            <li>
              <details>
                <summary>My_Profile</summary>
                <ul className="p-2 w-36 z-30">
                  <li>
                    {" "}
                    <Link to="/add-volunteer">
                      <a>Add Volunteer Post</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/my-manage-post'>
                      <a>Manage My Post</a>
                    </Link> 
                  </li>
                </ul>
              </details>
            </li>
          </ul> 
           
          <div className="md:hidden dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost mr-3 lg:hidden"
            >
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
              className="menu z-20 menu-sm  dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-44 "
            >
              <li>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to='/need-volunteer-page'> 
                  <a>Need Volunteer</a>
                </Link> 
              </li>
              {/* <li>
                <a>My Profile</a>
                <ul className="p-2">
                  <li className="p-0">
                    <Link to="/add-volunteer">
                      <a>Add Volunteer Post</a>
                    </Link>
                  </li>
                  <li>
                    <a>Manage My Post</a>
                  </li>
                </ul>
              </li> */}
              <li>
              <details>
                <summary>My_Profile</summary>
                <ul className="p-2 w-36 z-30">
                  <li>
                    {" "}
                    <Link to="/add-volunteer">
                      <a>Add Volunteer Post</a>
                    </Link>
                  </li>
                  <li>
                    <Link to='/my-manage-post'>
                      <a>Manage My Post</a>
                    </Link> 
                  </li>
                </ul>
              </details>
            </li>
            </ul>
          </div>
          <label className="swap mr-3 swap-rotate">
  
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={hundleToggle} className="theme-controller mx-2"  value="synthwave" />
            
            {/* sun icon */}
            <svg className="swap-off fill-current w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            
            {/* moon icon */}
            <svg className="swap-on fill-current w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            
          </label>
          {!user && (
            <Link to="/login">
              <a className="bg-orange-500 px-5 py-2 rounded text-white font-semibold ">
                Login
              </a>
            </Link>
          )}

          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    title={user?.displayName}
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-30 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32"
              >
                <li onClick={logOut}>
                  <a>Logout</a>
                </li>
                <li>
                   <Link to='/dashboard' ><a>DashBoard</a></Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
