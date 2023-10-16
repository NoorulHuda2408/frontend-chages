import axios from "axios";
console.log("Localstorage : ", localStorage.getItem("token"));

const client = axios.create({
  baseURL: 'http://localhost:8080',
//   baseURL: 'https://backend.fast-track.community',

});

export { client };
// 
export const  API_URL = 'http://localhost:8080'
// export const API_URL = 'https://backend.fast-track.community'
