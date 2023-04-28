import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';

function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    country: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:2411/api/v1/auth/account/userregister",
        { data: formData }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // Send registration request to API
  };

  return (
    <div className="flex justify-center items-center h-screen bg-stone-300">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1 className="text-center text-2xl  text-black mb-4 font-bold">
         
            User Registeration
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
              placeholder="name"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              firstname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Lastname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastname"
              id="lastname"
              value={formData.lastname}
              placeholder="lastname"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="email"
              id="email"
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="password"
              id="password"
              placeholder="password"
              value={formData.password}
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
              value={formData.country}
              placeholder="country"
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-center">
            <button
              className=" mt-5 mr-8 bg-green-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <button
              className=" mt-5 bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              <Link to="/Brokerregisteration">  Broker Register </Link> 
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserRegistrationForm;
