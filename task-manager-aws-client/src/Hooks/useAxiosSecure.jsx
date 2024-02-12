import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        console.log("track interceptor", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          console.log("before interception");
          localStorage.removeItem("token");
          console.log("after interception");
          navigate("/");
        }
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("track interceptor", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          console.log("before interception");
          localStorage.removeItem("token");
          console.log("after interception");
          navigate("/");
        }
        return Promise.reject(error);
      }
    );

    // Cleanup function to remove interceptors when component unmounts
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, axiosSecure]);

  return axiosSecure;
};

export default useAxiosSecure;
