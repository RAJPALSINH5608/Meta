import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

const AdminUpdate = () => {
  const isAuthenticated = sessionStorage.getItem("token");

  const [update, setUpdate] = useState({
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    country: "",
  });
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUpdate({ ...update, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(update);
    try {
      const username = sessionStorage.getItem("username");
      const xtoken = "Bearer " + token;
      const response = await axios({
        method: "post",
        url: `http://localhost:2411/api/v1/auth/account/${username}/adminUpdate`,
        headers: { authorization: xtoken, "Content-Type": "application/json" },
        data: update,
        params: { username: username },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      navigate("/errorPage");
    }
  };

  return isAuthenticated ? (
    <div className="flex justify-center items-center h-screen bg-green-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1 className="text-2xl text-center font-bold pb-10  ">
            Admin Update
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
              value={update.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="firstname"
              value={update.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="lastname"
              value={update.lastname}
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
              value={update.password}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Country
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="country"
              id="country"
              placeholder="country"
              value={update.country}
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
  ) : (
    <Navigate to={{ pathname: "/errorpage" }} />
  );
};

export default AdminUpdate;
