import React, { useContext } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { setIsAuth } = useContext(AuthContext);

  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://72af288291cb91cd.mokky.dev/users",
        data
      );
      if (response.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(response.data.data));
        localStorage.setItem("token", response.data.token);
        setIsAuth(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    let tel = e.target.tel.value;
    let ism = e.target.ism.value;
    let parol = e.target.parol.value;

    const data = {
      tel,
      ism,
      parol,
    };
    postData(data);
  };

  return (
    <div className="mt-[200px]">
      <div className="w-full flex justify-center items-center">
        <div className="w-[400px]">
          <div className=" text-center text-[45px] font-bold mb-[50px]">
            Register
          </div>
          <form className="p-2" onSubmit={handleChange}>
            <p className="mb-2">
              Phone number <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="mb-2 border-gray border-[1px] w-[400px] h-[50px] rounded-md outline-none"
              name="tel"
            />
            <p className="mb-2">
              Name <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="border-gray border-[1px] w-[400px] h-[50px] rounded-md outline-none"
              name="ism"
            />
            <p className="mb-2">
              Password <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="border-gray border-[1px] w-[400px] h-[50px] rounded-md outline-none"
              name="parol"
            />
            <button className="w-[400px] ml-[10px] h-[50px] bg-red-600 text-white mt-[20px] rounded-md hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-[1px] transition-all">
              Register
            </button>
            <div className="text-center mt-[15px] font-bold">
              <Link to="/" className="text-center text-gray-500">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
