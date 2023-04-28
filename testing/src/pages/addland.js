import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate,Navigate } from "react-router-dom";

const AddLand = () => {
  const isAuthenticated = sessionStorage.getItem('token');
  const [addland, setAddland] = useState({
    cityName: "",
    price: "",
    landType: "",
  });
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setAddland({ ...addland, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(addland);   
    try {
      const username = sessionStorage.getItem("username");
      const xtoken = "Bearer "+token
      const response = await axios({
        method: 'post',
        url: `http://localhost:2411/api/v1/admin/${username}/addLand`,
         headers:{'authorization':xtoken,
          'Content-Type': 'application/json'},
        data: addland,
        params:{username:username}
      });  
      console.log(response);
    } catch (error) {
      console.log(error);
      navigate("/errorPage");
    }
  };
  
  return isAuthenticated? (
    <div className="flex justify-center items-center h-screen bg-stone-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1 className="text-2xl text-center font-bold pb-10  ">
            Add Land 
          </h1>

          <div>
            <label className="block text-gray-700 font-bold mb-2">
              City Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="cityName"
              id="cityName"
              placeholder="cityName"
              value={addland.cityName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Land Type
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="landType"
              id="landType"
              placeholder="Land type"
              value={addland.landType}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div>
            <label className="block text-gray-700 font-bold mb-2">Price</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="price"
              id="price"
              placeholder="price"
              value={addland.price}
              onChange={handleInputChange}
            />

            <div className="flex justify-center">
              <button
                className="mt-5 mr-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    ) : (
      <Navigate to={{ pathname: '/errorpage' }} />
  );
};

export default AddLand;
