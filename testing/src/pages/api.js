import axios from "axios";
import { create } from "zustand";

const URL = "http://127.0.0.1:2411/api/v1/auth/account/";

//broker login using store

export const useAccountStore = create((set) => ({
  username: "",
  error: null,
  brokerlogin: async (formData) => {
    try {
      const res = await axios.post(`${URL}/brokerlogin`, formData);
      set({
        username: res.data.username,
        firstname: res.data.firstname,
        lastname: res.data.lastname,
        brokerID: res.data.brokerID,
        country: res.data.country,
        parent: res.data.parent,
      });
      return res.data;
    } catch (error) {
      return error;
    }
  },
}));

//user login api using store

export const userStore = create((set) => ({
  username: "",
  error: null,
  userlogin: async (formData) => {
    try {
      const res = await axios.post(`${URL}/userlogin`, formData);
      set({ username: res.data.username });
      return res.data;
    } catch (error) {
      return error;
    }
  },
}));

//api for user leadershipboard
export const leader = async (param) => {
  try {
    if (!param) {
      param = "tiles";
    }

    return await axios.get(
      `http://localhost:2411/api/v1/leadershipboard/user?by=` + param
    );
  } catch (error) {
    console.log("can not fetch broker leadership data", error);
  }
};

//api for brokerleadershipboard
export const brokerLeadership = async (param) => {
  try {
    if (!param) {
      param = "tiles";
    }

    return await axios.get(
      `http://localhost:2411/api/v1/leadershipboard/broker?by=` + param
    );
  } catch (error) {
    console.log("can not fetch broker leadership data", error);
  }
};

//api for marketpalce
export const Marketplace = async () => {
  try {
    return await axios.get("http://localhost:2411/api/v1/marketplace/allnft");
  } catch (error) {
    console.log("can not marketplace data", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/use`);
  } catch (error) {
    console.log("Error while calling getUsers API", error);
  }
};
