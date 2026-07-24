import api from "./api";



const register = async (userData) => {

  const response = await api.post(
    "/auth/register",
    userData
  );


  if (response.data.token) {

    localStorage.setItem(
      "token",
      response.data.token
    );


    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

  }


  return response.data;
};





const login = async (userData) => {

  const response = await api.post(
    "/auth/login",
    userData
  );


  if (response.data.token) {

    localStorage.setItem(
      "token",
      response.data.token
    );


    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

  }


  return response.data;
};





const logout = () => {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

};





const getCurrentUser = () => {

  const user = localStorage.getItem("user");


  if (user) {
    return JSON.parse(user);
  }


  return null;

};



const authService = {

  register,
  login,
  logout,
  getCurrentUser,

};


export default authService;