// src/services/api.js

import axios from "axios";


// Create Axios instance
const api = axios.create({

  baseURL: "http://localhost:8006/api",

  headers: {
    "Content-Type": "application/json",
  },

});



// Attach JWT token automatically
api.interceptors.request.use(

  (config) => {

    const token = localStorage.getItem("token");


    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }


    return config;

  },


  (error) => {
    return Promise.reject(error);
  }

);




// Handle API errors globally
api.interceptors.response.use(

  (response) => {
    return response;
  },


  (error) => {


    if (
      error.response &&
      error.response.status === 401
    ) {


      localStorage.removeItem("token");

      localStorage.removeItem("user");


      // Redirect only if user was already logged in
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/register"
      ) {

        window.location.href = "/login";

      }

    }


    return Promise.reject(error);

  }

);



export default api;