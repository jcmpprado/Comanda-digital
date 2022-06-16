import axios from 'axios'

const http = axios.created({
    baseURL: 'http://localhost:3000'
});

export default http;