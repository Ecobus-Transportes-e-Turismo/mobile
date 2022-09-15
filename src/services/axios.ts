import axios from "axios";


export const api = axios.create({
    baseURL: 'https://back-end-chi.vercel.app/api',
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    timeoutErrorMessage:"Tempo espirado..."
});