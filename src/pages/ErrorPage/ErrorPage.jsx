import { Link } from "react-router-dom";
import useDocumentTitle from "../../useDocumentTitle";

const ErrorPage = () => {
    useDocumentTitle('AB Real Estate: ErrorPage')
    return (
        <div className="text-center mt-44">
            <h1 className="text-5xl font-extrabold mb-7">Oops!</h1>
            <p className="text-xl">Sorry, Your Searching Page not Found.</p>
            <br />
            <Link to="/"><button className="btn bg-slate-300 font-bold">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;