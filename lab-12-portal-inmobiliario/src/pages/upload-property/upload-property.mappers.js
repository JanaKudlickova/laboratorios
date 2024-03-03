export const mapNewPropertyFromVmToApi = (newProperty) => {
  return {
    title: newProperty.title,
    notes: newProperty.notes,
    email: newProperty.email,
    phone: newProperty.phone,
    price: parseInt(newProperty.price),
    saleTypeIds: newProperty.saleTypes,
    address: newProperty.address,
    city: newProperty.city,
    provinceId: newProperty.province,
    squareMeter: parseInt(newProperty.squareMeter),
    rooms: parseInt(newProperty.rooms),
    bathrooms: parseInt(newProperty.bathrooms),
    locationUrl: newProperty.locationUrl,
    mainFeatures: newProperty.mainFeatures,
    equipmentIds: newProperty.equipments,
    images: newProperty.images,
  };
};
