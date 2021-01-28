import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/generic/';
axios.defaults.headers.common ['Authorization'] = 'Bearer ' + localStorage.getItem('access-token')
axios.defaults.headers.common ['Content-Type'] = 'application/json'