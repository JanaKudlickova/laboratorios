import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidation } from './upload-property.validations';
//import { history } from '../../core/router';
import {
  setOptionList,
  setCheckboxList,
  formatCheckboxId,
  onAddFeature,
  formatDeleteFeatureButtonId,
} from './upload-property.helpers';
import { mapNewPropertyFromVmToApi } from './upload-property.mappers';
import {
  getSaleTypeList,
  getProvinceList,
  getEquipmentList,
} from './upload-property.api';

let newProperty = {
  title: '',
  notes: '',
  email: '',
  phone: '',
  price: 0,
  saleTypes: [],
  address: '',
  city: '',
  province: '',
  squareMeter: 0,
  rooms: '',
  bathrooms: '',
  locationUrl: '',
  mainFeatures: [],
  equipments: [],
  images: [],
};

// const setEvents = (list) => {
//   list.forEach((element) => {
//     const id = formatCheckboxId(element);
//     onUpdateField(id, (event) => {
//       const value = event.target.value;
//       newProperty = {
//         ...newProperty,
//         saleTypes: [...newProperty.saleTypes, value]
//       };
//     });
//   });
// };

const addElement = (value, id) => {
  newProperty = { ...newProperty, [id]: [...newProperty[id], value] };
};

const removeElement = (value, id) => {
  const index = newProperty[id].indexOf(value);
  newProperty[id].splice(index, 1);
};

const setEvents = (list, ID) => {
  list.forEach((element) => {
    const id = formatCheckboxId(element);
    onUpdateField(id, (event) => {
      const value = event.target.value;
      event.target.value === true
        ? addElement(value, ID)
        : removeElement(value, ID);
    });
  });
};

Promise.all([getSaleTypeList(), getProvinceList(), getEquipmentList()]).then(
  ([saleTypeList, provinceList, equipmentList]) => {
    setCheckboxList(saleTypeList, 'saleTypes');
    setCheckboxList(equipmentList, 'equipments');
    setEvents(saleTypeList, 'saleTypes');
    setEvents(equipmentList, 'equipments');
    setOptionList(provinceList, 'province');
  }
);

onUpdateField('newFeature', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    mainFeatures: value,
  };

  // formValidation
  //   .validateField('select-account', transfer.originAccount)
  //   .then((result) => {
  //     onSetError('select-account', result);
  //   });
});

onUpdateField('title', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    title: value,
  };

  // formValidation.validateField('iban', transfer.iban).then((result) => {
  //   onSetError('iban', result);
  // });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    notes: value,
  };
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value,
  };

  //   formValidation.validateField('email', newProperty.email).then((result) => {
  //     onSetError('email', result);
  //   });
});

onUpdateField('phone', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value,
  };
});

onUpdateField('price', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: value,
  };

  // formValidation.validateField('amount', transfer.amount).then((result) => {
  //   onSetError('amount', result);
  // });
});

onUpdateField('address', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value,
  };

  // formVonUpdateField('provinceId', (event) => {
  //   const value = event.target.value;
  //   newProperty = {
  //     ...newProperty,
  //     provinceId: value,
  //   };

  //   // formValidation.validateField('concept', transfer.concept).then((result) => {
  //   //   onSetError('concept', result);
  //   // });
  // });alidation.validateField('concept', transfer.concept).then((result) => {
  //   onSetError('concept', result);
  // });
});

onUpdateField('city', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value,
  };

  // formValidation.validateField('concept', transfer.concept).then((result) => {
  //   onSetError('concept', result);
  // });
});

onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: value,
  };

  // formValidation.validateField('concept', transfer.concept).then((result) => {
  //   onSetError('concept', result);
  // });
});

onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value,
  };

  // formValidation.validateField('concept', transfer.concept).then((result) => {
  //   onSetError('concept', result);
  // });
});

onUpdateField('rooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: value,
  };

  // formValidation.validateField('concept', transfer.concept).then((result) => {
  //   onSetError('concept', result);
  // });
});

onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: value,
  };

  // formValidation.validateField('concept', transfer.concept).then((result) => {
  //   onSetError('concept', result);
  // });
});

onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value,
  };

  // formValidation.validateField('concept', transfer.concept).then((result) => {
  //   onSetError('concept', result);
  // });
});

// const features = onUpdateField('mainFeatures', (event) => {
//   const value = event.target.value;
//   newProperty = {
//     ...newProperty,
//     mainFeatures: [...newProperty.mainFeatures, value],
//   };
// });

onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  newProperty = {
    ...newProperty,
    mainFeatures: [...newProperty.mainFeatures, value],
  };
  onAddFeature(value);
  formatDeleteFeatureButtonId(value);
});

onSubmitForm('save-button', () => {
  console.log(newProperty);
});
