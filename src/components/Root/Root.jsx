import { Outlet } from "react-router-dom"; 
import Footer from "../LayOut/Footer";
import Navbar from "../LayOut/Navbar";

 
const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className="min-h-[calc(100vh-306px)]"> <Outlet/> </div>
             
        </div>
    );
};

export default Root;