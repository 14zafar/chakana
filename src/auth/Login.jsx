import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleData = (e) => {
    e.preventDefault()
    let tel = e.target.telefon.value;
    let password = e.target.password.value
  };
  return (
    <div className="w-full pt-[200px] flex justify-center items-center">
      <div className="w-[400px]">
        <div className=" text-center text-[45px] font-bold mb-[50px]">
          Login
        </div>
        <form className="p-2" onSubmit={handleData}>
          <p className="mb-2">
            Phone number <span className="text-red-500">*</span>
          </p>
          <input
            type="text"
            className="mb-2 border-gray border-[1px] w-[400px] h-[50px] rounded-md outline-none"
            name="telefon"
          />
          <p className="mb-2">
            Password <span className="text-red-500">*</span>
          </p>
          <input
            type="password"
            className="border-gray border-[1px] w-[400px] h-[50px] rounded-md outline-none"
            name="password"
          />
          <div className="w-[400px] flex justify-end mt-[20px]">
            <Link to="/parol" className="text-blue-500 text-right">
              forgot password ?
            </Link>
          </div>
          <button className="w-[400px] h-[50px] bg-red-600 text-white mt-[20px] rounded-md hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-[1px] transition-all">
            Sign up
          </button>
        </form>
        <div className="text-center mt-[15px] font-bold">
          <Link to="/register" className="text-center text-gray-500">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
