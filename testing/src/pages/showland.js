import React from "react";
import { Link,Navigate } from "react-router-dom";

const Showland = () => {
  const isAuthenticated = sessionStorage.getItem('token');
  const userData = {
    landType: sessionStorage.getItem("landType"),
    cityName: JSON.parse(sessionStorage.getItem("cityNameArray")),
    price: JSON.parse(sessionStorage.getItem("priceArray")),
  };

  const rows = userData.cityName.map((city, index) => (
    <tr key={index}>
      <td className="border px-4 py-2">{index + 1}</td>
      <td className="border px-4 py-2">{userData.landType}</td>
      <td className="border px-4 py-2">{userData.cityName[index]}</td>
      <td className="border px-4 py-2">{userData.price[index]}</td>
      <td className="border px-4 py-2">
        <button
          className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          <Link to="/priceChange">Edit</Link>
        </button>
      </td>
    </tr>
  ));

  return isAuthenticated? (
    <div>
      <div className="pt-20 pl-20 p-7 h-screen">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-blue-800 text-white">Serial No.</th>
              <th className="px-4 py-2 bg-blue-800 text-white">landType</th>
              <th className="px-4 py-2 bg-blue-800 text-white">cityName</th>
              <th className="px-4 py-2 bg-blue-800 text-white">price</th>
              <th className="px-4 py-2 bg-blue-800 text-white">Actions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
    ) : (
      <Navigate to={{ pathname: '/errorpage'}}/>
  );
};

export default Showland;
