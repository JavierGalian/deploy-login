import axios from 'axios';

export const getUsers = () => {
    return axios.get('https://apipersonas.onrender.com/api/data/');
}