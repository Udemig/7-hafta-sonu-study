/*
 * Static kelimesi bir sınıfın örneği (instance) olmadan doğrudan
 * sınıfa ait olduğu anlamına gelir. Bu bir sınıfın örneği
 * oluştulumdan da sınıf üzeiden erişebilen methodlar ve değişkenleri
 * tanımlamak için kullanılır
 */

// Static Methodlar
class Matematik {
  static topla(x: number, y: number): number {
    return x + y;
  }

  carp(x: number, y: number): number {
    return x * y;
  }
}

// static olmaığı için örnek oluşturup eriştik
const mat = new Matematik();
console.log(mat.carp(10, 30));

// static olduğu için class üzerinden eriştik
console.log(Matematik.topla(56, 78));

// Static Methodlar
class Ogrenci {
  static mevutOgrenciSayisi: number = 0;

  constructor(isim: string) {
    // constructor >  her yeni öğreinci oluştuğunda çalışır
    // static değikeni bir arttırır
    Ogrenci.mevutOgrenciSayisi++;
  }
}

const ogrenci1 = new Ogrenci('Ali');
const ogrenci2 = new Ogrenci('Ayşe');
const ogrenci3 = new Ogrenci('Fatma');
const ogrenci4 = new Ogrenci('Fatma');

// static değişkene doğrudan erişim
console.log('Öğrenci Sayısı', Ogrenci.mevutOgrenciSayisi);
