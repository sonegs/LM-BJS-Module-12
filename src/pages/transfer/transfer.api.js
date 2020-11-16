import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;

export const insertTransfer = transfer => Axios.post(`${url}/${transfer.id}`, transfer).then(({ data }) => data);

export const getTransfer = id => Axios.get(`${url}/${id}`).then(({ data }) => data);