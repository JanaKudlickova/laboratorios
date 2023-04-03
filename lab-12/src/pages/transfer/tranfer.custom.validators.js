export const dayValidator = ({ value }) => {
  const succeeded = parseInt(value) > 0 && parseInt(value) <= 31;

  return {
    succeeded,
    message: succeeded ? '' : 'Fecha no valida',
    type: '',
  };
};

export const monthValidator = ({ value }) => {
  const succeeded = parseInt(value) > 0 && parseInt(value) <= 12;

  return {
    succeeded,
    message: succeeded ? '' : 'Mes no valido',
    type: '',
  };
};

export const yearValidator = ({ value }) => {
  const succeeded = parseInt(value) >= 2023;

  return {
    succeeded,
    message: succeeded ? '' : 'Año no valido',
    type: '',
  };
};
