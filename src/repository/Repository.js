import axios from "axios"

const baseUrl = "http://localhost:9000/api";

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});