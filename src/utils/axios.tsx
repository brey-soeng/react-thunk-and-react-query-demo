import axios from "axios";

const useAxios = axios.create({
    baseURL: 'http://localhost:8000',
    timeout:5000
})

useAxios.interceptors.request.use(
    config => { return config},
    error => {return Promise.reject(error)} 
)

useAxios.interceptors.response.use( response => {
    return response
},
error => {
    return Promise.reject(error)
}
)

export default useAxios