import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from './../../constants/index';

export const getLanguages = createAsyncThunk(
  'getLanguages',
  async () => {
    // api'ye diller için atılan istek
    const res = await axios.request(options);
    // slice'a göderlicek dil verisi
    return res.data.data.languages;
  }
);

// çeviri için istek atma
export const translateText = createAsyncThunk(
  'translateText',
  async (param) => {
    // api'isteği
    const params = new URLSearchParams();
    params.set('source_language', param.sourceLang.value);
    params.set('target_language', param.targetLang.value);
    params.set('text', param.text);

    const options2 = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key':
          '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      data: params,
    };

    const res = await axios.request(options2);
    // slice'a aktarma
    return res.data.data.translatedText;
  }
);
