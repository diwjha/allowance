import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8082",
  headers: {
    "Content-Type": "application/json",
  },
});
//
// // Attach token
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//
//   return config;
// });
//
// // Response interceptor
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (
//       error.response?.status === 401 &&
//       window.location.pathname !== "/login"
//     ) {
//       localStorage.clear();
//
//       window.location.replace("/login");
//     }
//
//     return Promise.reject(error);
//   }
// );