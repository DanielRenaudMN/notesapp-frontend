import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8080/api",
  baseURL: "https://demo-notesapp-backend.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
