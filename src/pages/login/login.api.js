import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/login`;

export const isValidLogin = login => Axios.post(url, login).then(({ data }) => data);
// Exporta una constante que envía los datos (url y el login) por POST a Axios