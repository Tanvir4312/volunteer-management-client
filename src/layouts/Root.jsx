import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
    return (
        <div className="lg:w-6xl mx-auto">
            <Navbar></Navbar>
        
           <Outlet></Outlet>
      
        </div>
    );
};

export default Root;