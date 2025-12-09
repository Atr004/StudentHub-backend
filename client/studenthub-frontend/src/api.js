import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // change to deployed URL when needed
});

// Sign Up
export const signupUser = (userData) => api.post("/users/register", userData);

// Sign In
export const loginUser = (userData) => api.post("/users/login", userData);

// Fetch listings (requires token)
export const getListings = (token) =>
  api.get("/listings", { headers: { Authorization: `Bearer ${token}` } });

export default api;
