import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { iban } from '@lemoncode/fonk-iban-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import {
  dayValidator,
  monthValidator,
  yearValidator,
} from './tranfer.custom.validators';

const validationSchema = {
  field: {
    originAccount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: iban.validator,
        message: 'IBAN no valido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: positiveNumber.validator,
        message: 'Importe no valido',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no valido',
      },
    ],
    day: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: dayValidator,
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: monthValidator,
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: yearValidator,
      },
    ],
    date: [
      {
        validator: laterDate.validator,
        customArgs: {
          parseStringToDateFn: (value) => new Date(value),
          date: new Date(),
        },
        message: 'La fecha no es valida',
      },
    ],
    email: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: Validators.email,
        message: 'Email no valido',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
