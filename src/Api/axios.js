import Axios from "axios";
const AxiosInstance = Axios.create({
  //deploye server on render
    baseURL: "https://amazon-api-uhi9.onrender.com",
//for local server
  // baseURL: "http://localhost:5005",
});

export { AxiosInstance };
