import * as yup from 'yup';

// 1 küçük harf
// 1 büyük harf
// 1 sayı
// 1 özel karakter
// minimum 5 karakter
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

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

  password: yup
    .string()
    .min(5, 'Şifre en az 5 karakter olmalı')
    .matches(regex, 'Şifreniz yeterince güçlü değil')
    .required('Şifre alanı zorunludur'),

  confirmPassword: yup
    .string() //
    .oneOf([yup.ref('password')], 'Onay şifreniz doğru değil')
    .required('Lütfen şifrenizi onaylayın '),
});
