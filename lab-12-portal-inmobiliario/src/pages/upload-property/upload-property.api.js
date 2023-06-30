import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;
const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
const equipmentListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getSaleTypeList = () =>
  Axios.get(saleTypeListUrl).then((response) => {
    return response.data;
  });

export const getProvinceList = () =>
  Axios.get(provinceListUrl).then((response) => {
    return response.data;
  });

export const getEquipmentList = () =>
  Axios.get(equipmentListUrl).then((response) => {
    return response.data;
  });

export const uploadProperty = (property) =>
  Axios.post(url, property).then((response) => {
    return response.data;
  });
