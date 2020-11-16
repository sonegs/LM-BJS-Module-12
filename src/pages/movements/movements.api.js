import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

// Seleccionamos el id de la url y lo exportamos
export const getMovements = () => Axios.get(url).then(({ data }) => data);