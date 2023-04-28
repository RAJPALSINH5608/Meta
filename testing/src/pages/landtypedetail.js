import axios from "axios";
import { useState } from "react";
import { useNavigate,Navigate } from "react-router-dom";

function Landtypedetail() {
  const isAuthenticated = sessionStorage.getItem('token');
  const [formData, setFormData] = useState({
    landType: "metro",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData({ ["landType"]: value });
  };
  const token = sessionStorage.getItem("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const username = sessionStorage.getItem("username");
        const xtoken = "Bearer " + token;
        console.log(formData);
        const response = await axios({
        method: "get",
        url: `http://localhost:2411/api/v1/admin/${username}/detail`,
        headers: { authorization: xtoken, "Content-Type": "application/json" },

        params: { username: username, data: formData.landType },
      });
      if (response["status"] == 200) {
        const landTypeArray = response.data.landType;
        const cityNameArray = landTypeArray.map((item) => item.cityName);
        const cityNameArrayString = JSON.stringify(cityNameArray);
        const priceArray = landTypeArray.map((item) => Number(item.price));
        const priceArrayString = JSON.stringify(priceArray);

        console.log(response);
        sessionStorage.setItem("landType", formData.landType);
        sessionStorage.setItem("cityNameArray", cityNameArrayString);
        sessionStorage.setItem("priceArray", priceArrayString);

        navigate("/showland");

        return;
      }
    } catch (error) {
      console.log(error.response["status"]);
      if (error.response["status"] != 200) {
        window.alert("Invalid cerendials");
        return;
      }
    }
  };
  const landTypes = ["metro", "rural", "water", "forest", "urban", "semiurban"];
  let optionItems = landTypes.map((item) => (
    <option key={item} name="item" value={item}>
      {item}
    </option>
  ));
  return isAuthenticated? (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Land Type
            </label>
            <div className="col-2 text-left">
              <select onChange={handleInputChange}>{optionItems}</select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
              type="submit"
              to={`$`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
    ) : (
      <Navigate to={{ pathname: '/errorpage'}}/>
  );
}

export default Landtypedetail;
