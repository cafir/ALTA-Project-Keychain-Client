import axios from 'axios';

// const url = 'http://localhost:5000/holders';

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
})

export const fetchHolders = () => API.get('/holders');
export const createHolder = (newHolder) => API.post('/holders', newHolder);
export const updateHolder = (id, updatedHolder) => API.patch(`/holders/${id}`, updatedHolder);
export const deleteHolder = (id) => API.delete(`/holders/${id}`)

//Auth

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);