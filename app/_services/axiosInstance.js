import axios from "axios";
import { BASE_URL } from "../_constant/apiConstants";
import { AUTH_TOKEN } from "../_constant";


export const apiAUTH = axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
});

export const api = axios.create({
    baseURL: BASE_URL,
    timeout:10000,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
      },
})

apiAUTH.interceptors.request.use((config)=>{
    const token =localStorage.getItem(AUTH_TOKEN);
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  apiAUTH.interceptors.response.use((response)=>{
    return response
  }, function (error) {
    if(error?.status === 401) {
      localStorage.removeItem(AUTH_TOKEN)
    } else return error
    console.log('erroreeeeeeeeeeeeee', error)
  });