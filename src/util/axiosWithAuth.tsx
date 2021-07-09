import axios from "axios";

const token = localStorage.getItem("BNL_Corp");
const axiosAuth = axios.create({
  baseURL: "https://ricoma.herokuapp.com",
  headers: { authorization: token },
});

export default axiosAuth;
