import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAccountStore } from "./api";

const Showdata = () => {
  const Store = useAccountStore((state) => state);
  const username = useAccountStore((state) => state.username);
  const firstname = useAccountStore((state) => state.firstname);
  const lastname = useAccountStore((state) => state.lastname);
  const country = useAccountStore((state) => state.country);
  const parent = useAccountStore((state) => state.parent);
  const brokerID = useAccountStore((state) => state.brokerID);

  const [referLink, setReferLink] = useState(
    `http://127.0.0.1:2411/api/v1/auth/account/brokerregister?refer=${brokerID}`
  );

  const navigate = useNavigate();

  const handleReferLinkChange = () => {
    navigator.clipboard.writeText(referLink);
    // navigate("/Brokerregisteration");
  };
  return (
    <div>
      <div className="pt-20 pl-20 p-7 h-screen">
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-blue-800 text-white">Username</th>
              <th className="px-4 py-2 bg-blue-800 text-white">Firstname</th>
              <th className="px-4 py-2 bg-blue-800 text-white">Lastname</th>
              <th className="px-4 py-2 bg-blue-800 text-white">country</th>
              <th className="px-4 py-2 bg-blue-800 text-white">parent</th>
              <th className="px-4 py-2 bg-blue-800 text-white">Refer no</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{username}</td>
              <td className="border px-4 py-2">{firstname}</td>
              <td className="border px-4 py-2">{lastname}</td>
              <td className="border px-4 py-2">{country}</td>
              <td className="border px-4 py-2">{parent}</td>
              <td className="border px-4 py-2">{brokerID}</td>
              <div className="border px-4 py-2">
                <button
                  className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  <Link to="/Updatepassword">Edit</Link>
                </button>
              </div>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 flex">
          <input
            type="text"
            value={referLink}
            onChange={handleReferLinkChange}
            size={referLink.length}
            className="ml-3 border rounded px-3 py-1"
            readOnly
          />
          <button
            className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleReferLinkChange}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showdata;
