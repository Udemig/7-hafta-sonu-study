import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select';

type OptionType = {
  label: string;
  value: string;
};

type FilterPropType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: FilterPropType) => {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [params, setParams] = useSearchParams();

  // seçilen filtreye göre url'i güncelle
  useEffect(() => {
    //  url'e eklenicek paramtreyi belirle
    const key = title === 'Yakıt Tipi' ? 'fuel_type' : 'year';

    if (selected?.value) {
      // urldei parametelin yanına yenisini ekler
      params.set(key, selected.value.toLowerCase());
    } else {
      // value'su yoksa url'den aprameteyi kaldır
      params.delete(key);
    }

    // url'i güncelle
    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit text-black">
      <Select
        onChange={(e) => setSelected(e)}
        className="min-w-[100px]"
        placeholder={title}
        options={options}
      />
    </div>
  );
};

export default CustomFilter;
