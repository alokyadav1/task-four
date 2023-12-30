import axios from 'axios'
const instance = axios.create({
    baseURL: "https://send-email-4xde.onrender.com",
})
export default instance;    