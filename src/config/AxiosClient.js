import axios from "axios";
const API = 'https://randomuser.me/api/'

const AxiosClient = axios.create({
  baseURL: API
})

export default AxiosClient