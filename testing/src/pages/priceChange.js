import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate,Navigate } from "react-router-dom";

const PriceChange = () => {
  const isAuthenticated = sessionStorage.getItem('token');
  const [price, setPrice] = useState({
    cityName: "",
    price: "",
    landType: "",
  });
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setPrice({ ...price, [name]: value });
  };                        

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(price);
    try {
      const username = sessionStorage.getItem("username");
      const xtoken = "Bearer " + token;
      const response = await axios({
        method: "post",
        url: `http://localhost:2411/api/v1/admin/${username}/changePrice`,
        headers: { authorization: xtoken, "Content-Type": "application/json" },
        data: price,
        params: { username: username },
      });
      console.log(response);
      if (response.status == 200) {
        window.alert("Price has been changed to " + price.price);
      }
    } catch (error) {
      console.log(error);
      navigate("/errorPage");
    }
  };

   return isAuthenticated? (
    <div className="flex justify-center items-center h-screen bg-rose-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1 className="text-2xl text-center font-bold pb-10  ">
            Price Change
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
              value={price.cityName}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div>
            <label className="block text-gray-700 font-bold mb-2">Price</label>
            <input
              className="shadow mr-8 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="price"
              id="price"
              placeholder="price"
              value={price.price}
              onChange={handleInputChange}
            />
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Land Type
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="landType"
                id="landType"
                placeholder="Land Type"
                value={price.landType}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-center">
              <button
                className="mt-5  bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
 ) : (
  <Navigate to={{ pathname: '/errorpage'}}/>
);
};

export default PriceChange;
