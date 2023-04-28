import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";

const CreateAdmin = () => {
  const isAuthenticated = sessionStorage.getItem("token");
  const [admin, setAdmin] = useState({
    email: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: value });
  };

  const token = sessionStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(admin);

    try {
      const username = sessionStorage.getItem("username");
      const xtoken = "Bearer " + token;
      const response = await axios({
        method: "post",
        url: `http://localhost:2411/api/v1/admin/${username}/createAdmin`,
        headers: { authorization: xtoken, "Content-Type": "application/json" },
        data: admin,
        params: { username: username },
      });
      console.log(response.data.adminDetails.username);
    } catch (error) {
      console.log(error);
    }
  };
  return isAuthenticated ? (
    <div className="flex justify-center items-center h-screen bg-stone-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1 className="text-2xl text-center font-bold pb-10  ">
            Create Admin
          </h1>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="email"
              value={admin.email}
              onChange={handleInputChange}
            />
            <div className="flex justify-center">
              <button
                className="mt-5 mr-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <Link to="/adminLogin">Back</Link>
              </button>
              <button
                className="mt-5 mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <Link to="/adminUpdate">Admin Update</Link>
              </button>
              <button
                className="mt-5 mr-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>

              <button
                className="mt-5 mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <Link to="/addLand">Add Land</Link>
              </button>
              <button
                className="mt-5 mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <Link to="/landtypedetail">Land Type</Link>
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

export default CreateAdmin;
