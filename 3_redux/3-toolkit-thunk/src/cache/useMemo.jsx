import { useMemo } from 'react';
import { useState } from 'react';

/*
 * Cache (önbellek), bilgisay teknolojilerinde kullanılan bir terim.
 * Verileri geçici olarak saklamak için kullanılan
 * mekanizmayı ifade eder. Cache hızlı erişim sağlamak
 * veri alışverişini optimize etmek. perferomansı arttırmak
 * için kullanılır.
 * Memoization
 * useMemo
 * useCallback
 */
function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  //* useMemo(): bir değeri hesaplamak ve sonucu önbellekte
  //* saklamak için kullanılır
  //* her render sırasında hesaplamayı yapmak yerine
  //* eğerki bağımlılık değişmediyse hafızdan sonucu getirir
  const newCount = useMemo(() => {
    // ağır hesaplamalar
    [...new Array(10000000)].forEach((item) => {});
    // döndürülen sonuç
    return count * 2;
  }, [count]);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>{newCount}</p>

      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="isminiz"
        type="text"
      />
    </>
  );
}

export default Memo;
