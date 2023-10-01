import { createContext, useState } from 'react';

/*
 * Context API
 * Uygulamada birden çok bileşenin ihtiyacı olan verileri
 * Bielşenlerden bağımsız şekilde konumalnaan merkezlerde
 * yönetmeye yarar. Verileri ve verileri değiştriemeye
 * yarayan fonksiyonları tutarıx.
 * Context tuttuğumuz bu değişkenleri herahangi bir bileşene
 * doğrudan aktarabilir
 * Merkezi State Yönetim Aracı.
 */

//! Context yapısnın temeilini oluşturma
export const BasketContext = createContext();

//! Sağlayıcı ve onun tuttuğu verileri tanımalam
export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // sepete ekleme fonksiyonu
  const addToBasket = (product) => {
    // sepette bu üründen daha önce eklenemiş mi kontrol et
    const found = basket.find((i) => i.id === product.id);

    if (found) {
      // olan ürünün miktarını arttır
      const updated = { ...found, amount: found.amount + 1 };

      // dizideki ürünü güncelle
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      // state'i günceller
      setBasket(newBasket);
    } else {
      // sepete ürünü ekle
      setBasket(basket.concat({ ...product, amount: 1 }));
    }
  };

  // sepetten ürün kaldırır
  const removeFromBasket = (delete_id) => {
    // kaldılıacak ürünü bul
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      // miktarı 1 azalt
      // olan ürünün miktarını arttır
      const updated = { ...found, amount: found.amount - 1 };

      // dizideki ürünü güncelle
      const newBasket = basket.map((i) =>
        i.id === updated.id ? updated : i
      );

      // state'i günceller
      setBasket(newBasket);
    } else {
      // ürünü sepettten çıkar
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);
    }
  };

  return (
    // tuttuğumuz verileri uygulamayaya aktar
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
      }}
    >
      {/* children şuan app(bütün uygulama) */}
      {children}
    </BasketContext.Provider>
  );
}
