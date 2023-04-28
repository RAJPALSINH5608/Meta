import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const AdminLogin = () => {
  const [adminlogin, setAdminlogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setAdminlogin({ ...adminlogin, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(adminlogin);
    try {
      const response = await axios.post(
        "http://localhost:2411/api/v1/auth/account/adminlogin",
        { data: adminlogin }
      );
      console.log(response);
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("username", adminlogin.username);
      navigate("/createAdmin");

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-rose-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1 className="text-2xl text-center font-bold pb-10  ">
            Admin Login
          </h1>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={adminlogin.username}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="password"
              id="password"
              placeholder="password"
              value={adminlogin.password}
              onChange={handleInputChange}
            />

            <div className="flex justify-center">
              <button
                className=" mt-5 bg-green-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
