import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import logo from "../../assets/images/OriginalLogo.png";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="lg:px-16 border-gray-100 border-t-[1px] border-b-[1px]  lg:flex justify-between  space-y-4 p-10  text-base-content">
        <aside className="flex flex-col lg:items-start">
          <div className="flex items-center ">
            <img src={logo} className="w-20" alt="" />
            <p className="font-Sedan font-semibold text-4xl ">
              Serve<span className="text-orange-400">Sync</span>
            </p>
          </div>
          <p className="mt-3">Providing reliable tech since 1992</p>
        </aside> 

        <nav className="flex lg:items-start flex-col">
        <h6 className="footer-title">Contact us</h6>
          <div className="flex items-center  gap-3">
            <a
              className="text-3xl hover:text-[#0E46A3]"
              href="https://www.facebook.com/profile.php?id=100085467096858&mibextid=ZbWKwL"
              target="blank"
            >
              <IoLogoFacebook />
            </a>
            <a
              className="text-3xl hover:text-[#0E46A3]"
              href="https://web.whatsapp.com/"
              target="blank"
            >
              <FaWhatsappSquare />
            </a>
            <a
              className="text-3xl hover:text-[#0E46A3]"
              href="https://github.com/shahadat-siam"
              target="blank"
            >
              <FaGithubSquare />
            </a>
            <a
              className="text-3xl hover:text-[#0E46A3]"
              href="https://www.linkedin.com/in/shahadat-siam-41a582233/"
              target="blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="mt-4 flex flex-col lg:items-start">
            <p className="font-bold">
              Helpline :{" "}
              <span className="hover:underline cursor-pointer font-medium">
                {" "}
                01322810867
              </span>
              ,
              <span className="hover:underline font-medium cursor-pointer">
                {" "}
                01322876409
              </span>{" "}
            </p>
            <p className="font-bold">
              Suport :{" "}
              <a className="hover:underline cursor-pointer font-medium">
                lonelinessismycompanion09@gmail.com
              </a>
            </p>
          </div>
        </nav>
        
        <nav className="flex flex-col  lg:items-start"> 
          <h2 className="lg:max-w-[300px] text-start font-Sedan font-semibold text-gray-500">Don't miss to subscribe to our site, kindly fill the from below</h2>
          <div className="join mt-3">
            <input
              className="input input-bordered outline-none join-item"
              placeholder="Email"
            />
            <button className="btn join-item bg-red-600 text-white hover:bg-red-700">Subscribe</button>
          </div>
        </nav> 

      </footer>
      <div className=" ">
        <p className="p-7">copyright © ServeSync all right reserved 2024</p>
      </div>
    </div>
  );
};

export default Footer;
