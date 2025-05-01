import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
    return (
        <div className="lg:max-w-6xl md:max-w-2xl mx-auto">
            <Navbar></Navbar>
        
           <Outlet></Outlet>
      
        </div>
    );
};

export default Root;