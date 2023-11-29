import ReactSelect from 'react-select';
import { makes } from '../../constants';
import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

type ButtonProps = {
  design?: string;
};

// 1. Bileşen: Buton
const SearchButton = ({ design }: ButtonProps) => {
  return (
    <button className={`ml-3 z-10 ${design}`}>
      <img src="/magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

// 2.Bileşen: Arama Barı
const SearchBar = () => {
  const [params, setParams] = useSearchParams();

  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');

  type OptionType = {
    label: string;
    value: string;
  };

  // options şu şekilde olamalı: [{label:"Marka",value:Herhangi}]
  // buradaki map kodun üst seviyesinde olduğu için state her değiştiğinde
  // yani bileienin her renderında bu hesaplamayı  tekrar yaparız
  // halbuki hep aynı sonucu elde ediceğimzden bu performans sorunu yaratır
  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  // event parametrelerini tipini kendimiz tanımlayamayız
  // çünkü çok fazla veri var. Bu yüzden react'ta yerleşik
  // orlak bulunan tipleri kullnıopruz
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // url'i güncellerken
    // doğrudan setParams kullandığımzı için
    // url'e daha önce eklenen bütün paramları
    // sıfırlamış oluyoruz
    setParams({
      make,
      model,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          options={options}
          onChange={(e: OptionType | null) => e && setMake(e.value)}
          className="w-full text-black"
        />
        <SearchButton design={'sm:hidden'} />
      </div>
      <div className="searchbar__item">
        <img
          width={25}
          src="/model-icon.png"
          className="absolute ml-4"
        />
        <input
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input rounded text-black"
          type="text"
          placeholder="örn:Civic"
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchBar;
