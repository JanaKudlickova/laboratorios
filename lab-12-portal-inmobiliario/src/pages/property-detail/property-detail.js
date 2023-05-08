import { getEquipmentList, getPropertyDetail } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyDetailFromApiToVm } from './property-detail.mappers';
import { history } from '../../core/router';

const params = history.getParams();

let propertyDetail = {
  id: '',
  title: '',
  notes: '',
  price: '',
  city: '',
  squareMeter: '',
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: '',
  equipments: '',
  mainImage: '',
  images: '',
};

Promise.all([getPropertyDetail(params.id), getEquipmentList()]).then(
  ([apiPropertyDetail, equipmentList]) => {
    loadPropertyDetail(apiPropertyDetail, equipmentList);
  }
);

// getPropertyDetail(params.id).then((apiPropertyDetail) => {
//   propertyDetail = mapPropertyDetailFromApiToVm(apiPropertyDetail);
//   setPropertyValues(propertyDetail);
// });

const loadPropertyDetail = (apiPropertyDetail, equipmentList) => {
  propertyDetail = mapPropertyDetailFromApiToVm(
    apiPropertyDetail,
    equipmentList
  );
  setPropertyValues(propertyDetail);
};
