import axios from 'axios'

const APP_AXIOS = axios.create({
  baseURL: `${process.env.REACT_APP_NODE_API_URI}`,
})

export default APP_AXIOS
