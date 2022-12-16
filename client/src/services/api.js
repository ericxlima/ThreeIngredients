import axios from "axios";

let baseUrl = "http://localhost:8000/api/";
const Authorization = "";

if (window.location.origin === "http://localhost:3000") {
  baseUrl = "http://127.0.0.1:8000";
} else {
  baseUrl = window.location.origin;
}

export const api = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    Authorization: Authorization ? Authorization : "",
    "Content-Type": "application/json",
  },
});
