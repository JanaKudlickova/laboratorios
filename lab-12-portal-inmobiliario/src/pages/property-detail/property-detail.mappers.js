export const mapPropertyDetailFromApiToVm = (property, equipmentList) => {
  return {
    id: property.id,
    title: property.title,
    notes: property.notes,
    price: `${property.price.toLocaleString()} €`,
    city: property.city,
    squareMeter: `${property.squareMeter}m2`,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    bathrooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: getEquipmentName(property.equipmentIds, equipmentList),
    mainImage: Array.isArray(property.images) ? property.images[0] : '',
    images: property.images,
  };
};

const getRoomWord = (rooms) => {
  return rooms > 1 ? 'habitaciones' : 'habitacion';
};

const getBathroomWord = (bathrooms) => {
  return bathrooms > 1 ? 'baños' : 'baño';
};

const getEquipmentName = (equipmentIds, equipmentList) => {
  return equipmentIds.map((equipmentId) => {
    const equipment = equipmentList.find((item) => item.id === equipmentId);

    return equipment.name;
  });
};
