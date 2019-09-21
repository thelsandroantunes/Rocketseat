import axios from 'axios';

const api = axios.create({
    baseURL: "https://rocketseat-node.herokuapp.com/api"
    //baseURL: "https://api.github.com/users/thelsandro/repos"
});

export default api;