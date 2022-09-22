import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    timeoutErrorMessage:"Tempo espirado..."
});



export { api }