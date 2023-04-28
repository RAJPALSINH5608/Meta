import React, { useState } from "react";
import axios from "axios";

const Final = () => {
  const [referId, setReferId] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://127.0.0.1:2411/api/v1/auth/account/referlink`
      );
      console.log(response);
      setReferId(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Metamask Example</h1>
          <div className="content">
            <h2>What is Metamask?</h2>
            <h2>How to use Metamask</h2>
            <ol>
              <li>Install the Metamask extension for your browser.</li>
            </ol>
            <button>Refer</button>
            <p> referId: {referId}</p>
          </div>
        </div>
      </form>
    </>
  );
};
export default Final;
