// Custom Hook
// react hookların abenzer şekilde görev yapan
// projennin ihtiyacına göre kednimiz oluşturğumuz
// ve görevini bizim belideldiğimi hooklardır
// custom hooklar genelde verileri, ve veriyi
// güncellemeye yarayan fonksiyonu dizi içerisnde döndürür

import { useEffect, useState } from 'react';

export function useLocaleStorage<T>(key: string, initialValue: T) {
  // 1) state'i in ilk değini tanımla
  // eğerki local'de bir değer varsa onu al
  // yoksa gelen inital statei kullan
  const [value, setValue] = useState<T>(() => {
    // localden ilgili değeri al
    const jsonValue = localStorage.getItem(key);

    if (jsonValue === null) {
      // local'de eleman yoksa initial value'yu ilk değer olsun
      return initialValue;
    } else {
      // lokalde eleman varsa lokaldeki veri ilk değer olsun
      return JSON.parse(jsonValue);
    }
  });

  // 2) state her değişitğinde local'i güncelle
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  // 3)state'i ve güncellemeye yarayan fonksiyonu döndür
  // tuple ile tip tannımladık
  // ilk elemanın tipi generic olarrak gelen tipte
  // ikinci elemanın tipi ise sabit olrak varasyılan tipi olucak
  return [value, setValue] as [T, typeof setValue];
}
