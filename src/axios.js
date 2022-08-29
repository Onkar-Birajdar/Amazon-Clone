import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-clash-coder-3d740/us-central1/api/",
     //The api (Cloud function ) URL
});

export default instance;