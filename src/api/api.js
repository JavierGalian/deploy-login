import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apipersonas.onrender.com/api/data/'
})

export const getUsers = () => api.get('/')


export const createUser = (data) => api.post('/', data)