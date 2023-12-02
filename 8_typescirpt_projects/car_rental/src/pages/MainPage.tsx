import { useEffect, useState } from 'react';
import CustomFilter from '../components/CustomFilter';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import { fetchCars } from '../utils/fetchCars';
import { CarType } from '../types';
import Card from '../components/Card';
import ShowMore from '../components/ShowMore';
import { useSearchParams } from 'react-router-dom';
import { fuels, years } from '../constants';

const MainPage = () => {
  const [params] = useSearchParams();
  // use state bizden state'de tutucağımız verinin tipini ister
  // bizde "generic" yardımıyla bir CarType dizisini state'de
  // tutucağımızı söyledik
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  // bileşen ekrana basılınca ve params değişince api isteği at
  useEffect(() => {
    // url'deki bütün parametrelei al ve obje oluştur
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj)
      // istek başarılı olursa state'e aktar
      .then((data) => setCars(data))
      // istek başarısız olursa
      .catch(() => setIsError(true));
  }, [params]);

  return (
    <div>
      <Hero />

      <div
        id="catalogue"
        className="mt-12 padding-x padding-y max-width"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        {/* filtreleme Alanı */}
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Üretim Yılı" options={years} />
          </div>
        </div>

        {/* 
           1) Veri nullsa > henüz apiden cevap gelememiştir
           2) IsError true ise > api'den cevabı alırken hata olmuuştur
           3) Veri Boş diziyse > Kriterlere uygun eleman bulunamadı
           4) Veri dolu diziyse > veri başarıyla geldi
        */}
        {!cars ? (
          <div className="home__error-container">
            <h2>Yükleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="home__error-container">
            <h2>Üzgünüz. Verileri alırken bir hata oluştu.</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Aradığınız kriterlere uygun araba bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
