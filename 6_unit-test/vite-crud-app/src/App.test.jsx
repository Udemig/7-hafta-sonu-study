// bir şey return eden fonk

import { afterAll, afterEach, beforeEach, describe } from 'vitest';

const multiple = (a, b, c) => {
  return a * b * c;
};

// describe > bir elemanın farklı durumlarını
// test ediyorsak o testleri bir arada tutmak için kullanıyoruz
describe('multiple Fonksiyonu için testler', () => {
  // testlerin her birinden önce/sonra
  // veya hespsinden önce/sonra bir kere fonk çalıştırmaya yarar
  //  ör: bütün testlerin ortak olrak kullandığı değişken varsa
  // her testin sonunda bu değşikeni yeniden tanımlayabilirz
  afterAll(() => {
    console.log('tst tamamlandu');
  });

  it('Pozitif sayılar gönderildiğinde sonuç', () => {
    expect(multiple(10, 2, 3)).toBe(60);
  });

  it('negatif sayılar gönderildiğinde sonuç', () => {
    expect(multiple(-10, -2, -3)).toBe(-60);
  });

  it('sıfır  gönderildiğinde sonuç', () => {
    expect(multiple(-10, -2, -3)).toBe(-60);
  });
});

// App bileşenine ekrana basın
// formu dodlurun ekleme yapınca
// formada yazdığınız bilgiye göre tabloda
// yeni satır oluşuyor mu kontrol edin
