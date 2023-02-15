
import {MdPassword, MdEmail} from "react-icons/md";
import { Link } from "react-router-dom";
function SignIn() {
    return ( <>
    <div className="sign-in flex justify-center items-center ">
    
        <form className="border p-20 mt-10">
        <span className="text-2xl mt-20 font-bold ">Sign In</span>
            <div className="flex items-center rounded bg-white text-black my-6">
                <span className="p-2"><MdEmail/></span>
                <input type="email" placeholder="Email" className="outline-none" />
            </div>
            <div className="flex items-center rounded bg-white text-black my-6">
                <span className="p-2"><MdPassword/></span>
                <input type="password" placeholder="Password" className="outline-none" />
            </div>
            <div>
                <button className="bg-yellow-400 w-full py-1 rounded text-black">Login</button>
            </div>
            <div className="mt-6 text-xs underline">
                <Link to="/sign-up" className="pt-6">Create new Account?</Link>
            </div>
        </form>
    </div>
    </> );
}

export default SignIn;