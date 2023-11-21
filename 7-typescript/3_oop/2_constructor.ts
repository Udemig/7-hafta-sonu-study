/*
 * Constructor -  İnşa Etme - methodu

 * Bir'sınıfın constructor'ı o sınıftan bir nesne oluşturulduğunda
 * ilk çağrılan methoddur. Bu method objenin özelliklerinin başlangıç
 * değerlernin atanmasna yarar.
 * 
 */

class Person {
  // 1) sınıfın özelliklerini belirleme
  ad: string = 'mehmet';
  soyad: string = 'yıdlız';
  yas: number = 40;

  // 2) Constructor tanımı ile başlangıç değerleri atama
  constructor(ad: string, soyad: string, yas: number) {
    this.ad = ad;
    this.soyad = soyad;
    this.yas = yas;
  }

  // 3) Method'ları tanımla
  kendiniTanit() {
    console.log(
      `Merhabai Benim adım ${this.ad} ${this.soyad} ve ${this.yas} yaşındayım`
    );
  }
}

//  person sınıfından bir nesne oluşturma
const kisi = new Person('Ahmet', 'Demir', 35);

console.log(kisi); // yeni nesne

kisi.kendiniTanit(); // nesnedki methoda erişme

// Soru: Bir monitör class'ı yazınız:
