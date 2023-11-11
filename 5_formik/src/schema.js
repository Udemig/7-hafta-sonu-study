import * as yup from 'yup';

export const schema = yup.object().shape({
  // email için zorunlulukları belirleme
  email: yup
    .string()
    .email('Lütfen geçerli bir email formatı giriniz')
    .required('Email alanı zorunludur'),

  // yaşi için zorunlulukları belirleme
  age: yup
    .number()
    .min(18, 'Yaş değeri 18 den büyük olmalı')
    .max(100, 'Yaş 100 den büyük olamaz')
    .integer('Lütfen bir tam sayı giriniz'),

  //   password: '',
  //   confirmPassword: '',
});
