import { Validators, createFormValidation } from '@lemoncode/fonk';

//default in english
// const validationSchema = {
//   field: {
//     user: [Validators.required, Validators.email],
//     password: [Validators.required],
//   },
// };

//if we want to change the message to spanish
const validationSchema = {
  field: {
    user: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no valido',
      },
    ],
    password: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
