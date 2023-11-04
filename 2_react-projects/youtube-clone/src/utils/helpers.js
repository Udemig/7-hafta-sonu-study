import axios from 'axios';

const options = {
  params: { geo: 'TR', lang: 'tr' },
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
  },
};
axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

// veridğimiz url'e istek atıp
// geriye verileri döndüren yardımıxcı fonk
export const getData = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (err) {
    console.log('Verileri çekerken hata oluştu');
  }
};
