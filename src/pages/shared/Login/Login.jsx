import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin=(e)=>{
        e.preventDefault()
    }

    return (
        <div>
            <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <form className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-5">New to here? Please <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;