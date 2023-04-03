import Axios from 'axios';

const url1 = `${process.env.BASE_API_URL}/account-list`;
const url2 = `${process.env.BASE_API_URL}/movements`;

export const getAccount = (id) =>
  Axios.get(`${url1}/${id}`).then((response) => {
    return response.data;
  });

export const getMovements = (id) =>
  Axios.get(url2, { params: { accountId: id } }).then((response) => {
    return response.data;
  });
