import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
const equipmentsUrl = `${process.env.BASE_API_URL}/equipments`;

export const getPropertyDetail = (id) =>
  Axios.get(`${url}/${id}`).then((response) => {
    return response.data;
  });

export const getEquipmentList = () =>
  Axios.get(equipmentsUrl).then((response) => {
    return response.data;
  });
