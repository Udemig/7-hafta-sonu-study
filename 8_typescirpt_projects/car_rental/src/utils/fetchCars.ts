import { CarType } from '../types';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

// Asenkron işlemler yapıp sonuç döndüren fonksiyonlarda
// retun tipini doğrudan yazmayız yerleşik bir react interface'i
// olan "Promise"i kullanırız ve bunuda generic tip olarak
// api issterği başarılı olunca elde ediceğimiz verinin tipini veririz
// şuan gelen veirini tipini bilmediğimiz için any verdik
// apiden gelen cevabu inceldik gelen verinin tipini yazdık
// any yerini oluştudğumuz tipi verdil
export async function fetchCars(): Promise<CarType[]> {
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=civic`,
    options
  );

  return await res.json();
}
