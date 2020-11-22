import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/account`;
const urlTransfer = `${process.env.BASE_API_URL}/transfer`;

export const insertTransfer = transfer => Axios.post(`${urlTransfer}/${transfer.id}`, transfer).then(({ data }) => data);

export const getTransfer = () => Axios.get(url).then(({ data }) => data);