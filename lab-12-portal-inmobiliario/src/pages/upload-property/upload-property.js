import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import { formValidation } from './upload-property.validations';
import { history } from '../../core/router';
import {
  setOptionList,
  setCheckboxList,
  formatCheckboxId,
  onAddFeature,
  formatDeleteFeatureButtonId,
  onRemoveFeature,
} from './upload-property.helpers';
import { mapNewPropertyFromVmToApi } from './upload-property.mappers';
import {
  getSaleTypeList,
  getProvinceList,
  getEquipmentList,
  uploadProperty,
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
  rooms: 0,
  bathrooms: 0,
  locationUrl: '',
  mainFeatures: [],
  equipments: [],
  images: [],
};

const addElement = (value, id) => {
  newProperty = { ...newProperty, [id]: [...newProperty[id], value] };
};

// const addElement = (value, obj, id) => {
//   return { ...obj, [id]: [...obj[id], value] };
// };

const removeElement = (value, id) => {
  const index = newProperty[id].indexOf(value);
  newProperty[id].splice(index, 1);
};

// const removeElement = (value, obj, id) => {
//   const index = obj[id].indexOf(value);
//   return obj[id].splice(index, 1);
// };

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

// const setEvents = (list, ID) => {
//   list.forEach((element) => {
//     const id = formatCheckboxId(element);
//     onUpdateField(id, (event) => {
//       const value = event.target.value;
//       if (event.target.checked === true) {
//         newProperty = addElement(value, newProperty, ID);
//       } else {
//         newProperty = removeElement(value, newProperty, ID);
//       }
//     });
//   });
// };

Promise.all([getSaleTypeList(), getProvinceList(), getEquipmentList()]).then(
  ([saleTypeList, provinceList, equipmentList]) => {
    setCheckboxList(saleTypeList, 'saleTypes');
    setCheckboxList(equipmentList, 'equipments');
    setEvents(saleTypeList, 'saleTypes');
    setEvents(equipmentList, 'equipments');
    setOptionList(provinceList, 'province');
  }
);

onUpdateField('title', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    title: value,
  };

  formValidation.validateField('title', newProperty.title).then((result) => {
    onSetError('title', result);
  });
});

onUpdateField('notes', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    notes: value,
  };

  formValidation.validateField('notes', newProperty.notes).then((result) => {
    onSetError('notes', result);
  });
});

onUpdateField('email', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    email: value,
  };

  formValidation.validateField('email', newProperty.email).then((result) => {
    onSetError('email', result);
  });
});

onUpdateField('phone', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    phone: value,
  };

  formValidation.validateField('phone', newProperty.phone).then((result) => {
    onSetError('phone', result);
  });
});

onUpdateField('price', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    price: value,
  };

  formValidation.validateField('price', newProperty.price).then((result) => {
    onSetError('price', result);
  });
});

onUpdateField('address', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    address: value,
  };

  formValidation
    .validateField('address', newProperty.address)
    .then((result) => {
      onSetError('address', result);
    });
});

onUpdateField('city', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    city: value,
  };

  formValidation.validateField('city', newProperty.city).then((result) => {
    onSetError('city', result);
  });
});

onUpdateField('squareMeter', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    squareMeter: value,
  };

  formValidation
    .validateField('squareMeter', newProperty.squareMeter)
    .then((result) => {
      onSetError('squareMeter', result);
    });
});

onUpdateField('province', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    province: value,
  };

  formValidation
    .validateField('province', newProperty.province)
    .then((result) => {
      onSetError('province', result);
    });
});

onUpdateField('rooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    rooms: value,
  };

  formValidation.validateField('rooms', newProperty.rooms).then((result) => {
    onSetError('rooms', result);
  });
});

onUpdateField('bathrooms', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    bathrooms: value,
  };

  formValidation
    .validateField('bathrooms', newProperty.bathrooms)
    .then((result) => {
      onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    locationUrl: value,
  };

  formValidation
    .validateField('locationUrl', newProperty.locationUrl)
    .then((result) => {
      onSetError('locationUrl', result);
    });
});

onUpdateField('saleTypes', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    saleTypes: [...newProperty.saleTypes, value],
  };

  formValidation
    .validateField('saleTypes', newProperty.saleTypes)
    .then((result) => {
      onSetError('saleTypes', result);
    });
});

onUpdateField('newFeature', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    mainFeatures: [...newProperty.mainFeatures, value],
  };

  formValidation
    .validateField('newFeature', newProperty.newFeature)
    .then((result) => {
      onSetError('newFeature', result);
    });
});

onUpdateField('equipments', (event) => {
  const value = event.target.value;
  newProperty = {
    ...newProperty,
    equipments: [...newProperty.equipments, ...value],
  };
});

onSubmitForm('insert-feature-button', () => {
  const value = document.getElementById('newFeature').value;
  newProperty = {
    ...newProperty,
    mainFeatures: [...newProperty.mainFeatures, value],
  };
  onAddFeature(value);
  const deleteId = formatDeleteFeatureButtonId(value);
  onSubmitForm(deleteId, () => {
    onRemoveFeature(value);
  });
});

// onSubmitForm('insert-feature-button', () => {
//   const value = document.getElementById('newFeature').value;
//   const deleteId = formatDeleteFeatureButtonId(value);
//   newProperty = addElement(value, newProperty, 'mainFeatures');
//   onAddFeature(value);
//   onSubmitForm(deleteId, () => {
//     onRemoveFeature(value);
//     removeElement(value, newProperty, 'mainFeatures');
//   });
// });

onSubmitForm('save-button', () => {
  formValidation.validateForm(newProperty).then((result) => {
    onSetFormErrors(result);

    const apiProperty = mapNewPropertyFromVmToApi(newProperty);

    console.log(newProperty);
    if (result.succeeded) {
      uploadProperty(apiProperty).then(() => {
        history.back();
      });
    }
  });
});
