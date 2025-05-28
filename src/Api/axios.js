import Axios from "axios";
const AxiosInstance = Axios.create({
  //deploye server on render
//   baseURL: "https://amazon-backend-mbv1.onrender.com",

  baseURL: "http://localhost:5005",
});

export { AxiosInstance };
