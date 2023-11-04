// asenkron işlemler yapıp
// sonucunu aşama aşama slice'a bildiren
// pending / fullfilled / rejected
// asenkron thunk aksiyonu
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ? bizden isteği iki paramtre
// aksiyonun tipi (string)
// fonksiyon
export const getUser = createAsyncThunk('getUsers', async () => {
  // veritabanı işleemeleri
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  // aksiyonun payload'ını belirleme
  return res.data;
});
