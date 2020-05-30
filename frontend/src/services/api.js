import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2425',
    headers: {
        "Content-type": "application/json"
      }
});

export default api;