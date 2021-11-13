import axios from 'axios';

const url = 'http://localhost:5000/holders';

export const fetchHolders = () => axios.get(url);
export const createHolder = (newHolder) => axios.post(url, newHolder);
export const updateHolder = (id, updatedHolder) => axios.patch(`${url}/${id}`, updatedHolder);
export const deleteHolder = (id) => axios.delete(`${url}/${id}`)