import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "./api";

function LoginForm() {
  const Navigate = useNavigate();
  const Store = userStore((state) => state);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const formData = {
        username: values.username,
        password: values.password,
      };
      console.log(formData);

      const result = await Store.userlogin(formData);
      console.log(result);
      // Navigate("/showdataa")
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-md mx-auto mt-48 bg-red-100 p-10 rounded "
    >
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 font-bold mb-2"
        >
          Username:
        </label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
          className={
            formik.touched.username && formik.errors.username
              ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
          placeholder="Enter your username"
        />
        {formik.touched.username && formik.errors.username && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.username}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-bold mb-2"
        >
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className={
            formik.touched.password && formik.errors.password
              ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
          placeholder="Enter your password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-xs italic">
            {formik.errors.password}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log In
        </button>
        <a
          href="/Brokerlogin"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          <Link to="/Brokerlogin">Broker login</Link>
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
