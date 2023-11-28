import { useEffect, useState } from 'react';
import CustomFilter from '../components/CustomFilter';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import { fetchCars } from '../utils/fetchCars';
import { CarType } from '../types';

const MainPage = () => {
  // use state bizden state'de tutucağımız verinin tipini ister
  // bizde "generic" yardımıyla bir CarType dizisini state'de
  // tutucağımızı söyledik
  const [cars, setCars] = useState<CarType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  // bileşen ekrana basılınca api isteği at
  useEffect(() => {
    fetchCars()
      // istek başarılı olursa state'e aktar
      .then((data) => setCars(data))
      // istek başarısız olursa
      .catch(() => setIsError(true));
  }, []);

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
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {/* hata oluysa ekrana bas*/}
        {isError && (
          <div className="home__error-container">
            <h2>Üzgünüz Bir sorun oluştu</h2>
          </div>
        )}

        {/* arabalar gelmediyse uyarı bas geldiyse ekrana bas */}
        {!cars || cars.length < 1 ? (
          <div className="home__error-container">
            <h2>Aradığınız kriterlere uygun araba bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car) => car.make)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
