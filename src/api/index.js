import axios from "axios";

const API = axios.create({
  baseURL: "https://keychain-backend.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchHolders = (id, page) => API.get(`/holders/${id}/?page=${page}`);
export const fetchHoldersBySearch = (id, searchQuery) => API.get(`/holders/${id}/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const createHolder = (newHolder) => API.post("/holders", newHolder);
export const updateHolder = (id, updatedHolder) =>
  API.patch(`/holders/${id}`, updatedHolder);
export const deleteHolder = (id) => API.delete(`/holders/${id}`);

//Auth

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
