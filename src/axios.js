import axios from "axios";

const instance = axios.create({
    baseURL:"..." //The api (Cloud function ) URL
})

export default instance;