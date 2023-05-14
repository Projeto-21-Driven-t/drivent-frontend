import dayjs from 'dayjs';

const validations = {
  cardNumber: {
    custom: {
      isValid: (value) => parseInt(value?.replaceAll(' ', '')?.length, 10) === 16,
      message: 'Digite um número de cartão válido',
    },
  },
  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: 'Digite um nome válido',
    },
  },
  validThru: {
    custom: {
      isValid: (value) => {
        const date = dayjs();
        const parts = value.split('/');
        return parts[1] > date.year() - 2000 || (parts[0] > date.month && parts[1] === date.year() - 2000);
      },
      message: 'Digite uma data de validade válida',
    },
  },
  cvc: {
    custom: {
      isValid: (value) => parseInt(value.length, 10) === 3,
      message: 'Digite um CVC válido',
    },
  },
};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}
