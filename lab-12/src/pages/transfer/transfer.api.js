import Axios from 'axios';

const url1 = `${process.env.BASE_API_URL}/transfer`;
const url2 = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = () =>
  Axios.get(url2).then((response) => {
    return response.data;
  });

export const insertTransfer = (transfer) =>
  Axios.post(url1, transfer).then((response) => {
    return response.data;
  });
