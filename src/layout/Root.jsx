import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
    return (
        <div className="mx-7 font-poppins">
            <div className="h-20">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-150px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;