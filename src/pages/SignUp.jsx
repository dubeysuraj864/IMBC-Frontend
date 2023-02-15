import { useState } from "react";
import { BiUser,BiLoader } from "react-icons/bi";
import {IoCheckmarkDoneCircle } from "react-icons/io5";
// import {IoIosCloudDone} from "react-icons/io"
import { MdPassword, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[status, setStatus]= useState("");
  // const[saved] = useState(<IoIosCloudDone className="ml-2"/>)
  const [done, setDone] = useState(<BiLoader className="group-hover:animate-spin mr-2"/>)


  const handleData = async(e) => {
    e.preventDefault();
   let result = await fetch("http://localhost:5000/register",{
    method: "post",
    body: JSON.stringify( {name, email, password}),
    headers:{
        "Content-Type":"application/json",
        "Accept": "application/json"
    }
   });
   result = await result.json();
   console.log(result) 
   localStorage.setItem('users', JSON.stringify(result))
   setDone(<IoCheckmarkDoneCircle className="animate-none mr-2"/>)
   setStatus(`You are registered successfully`)
  }
  

  return (
    <>
      <div className="sign-in flex justify-center items-center ">
        <form className="border px-20 py-10 my-10 flex flex-col">
          <span className="text-2xl mt-0 font-bold ">Register</span>
          <span className="flex items-center text-green-500">{status}</span>
          <div className="flex items-center rounded bg-white text-black my-6">
            <span className="p-2">
              <BiUser />
            </span>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Full Name"
              className="outline-none"
              required
            />
          </div>
          <div className="flex items-center rounded bg-white text-black my-0">
            <span className="p-2">
              <MdEmail />
            </span>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              className="outline-none"
              required
            />
          </div>
          <div className="flex items-center rounded bg-white text-black my-6">
            <span className="p-2">
              <MdPassword />
            </span>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="outline-none"
              required
            />
          </div>
          <div onClick={handleData}>
            <button  className="bg-yellow-400 w-full py-1 rounded text-black flex justify-center items-center group">
              <span >{done}</span>
              <span>Sign Up</span>
            </button>
          </div>
          <div className="mt-6 text-xs underline">
            <Link to="/sign-in" className="pt-6">
              Already have a account?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
