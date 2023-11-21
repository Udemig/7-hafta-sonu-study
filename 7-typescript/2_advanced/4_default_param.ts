/*
  * Default Param (Varsayılan Değere Sahip Parametre)

  * Bazı opsiyonel parametrelerede değer göndermedğimiz
  * azman undefined olması yerine bizim belirlediğimiz değere
  * sahip olmasını istiyorsa default param tanımlarız
  * 
  * Özellikler:
  * 
  * Default parama varsaılan değer verirken = işareti kullanıyoruz
  * 
  * Bu yöntemi eğerki parametreyi gödnermediğimiz zman undefined 
  * olmasını istemiyorsak kullanırız
 */

function selamVer(isim: string = 'Dünya'): string {
  return `Merhaba ${isim}`;
}

console.log(selamVer());

console.log(selamVer('Furkan'));

// Herkes default bir parametreye sahip bir fonksiyon yazsın
// ardından hem parametreyi gödermeyerek hemde göndererek fonksiyonu
// çalışıtırn ve sonuçları konsola yazın

// 1.cevap
function hesaplaKDV(maliyet: number, kdv: number = 0.18): number {
  return maliyet * kdv;
}

console.log(hesaplaKDV(300));
console.log(hesaplaKDV(300, 0.08));

// 2.cevap
const handleSubmit = (
  value: string = 'bir sayı girilmedi'
): string => {
  return ` forma girilen sayı : ${value}`;
};

console.log(handleSubmit());
console.log(handleSubmit('5'));

// 3.cevap
function inidirim(fiyat: number = 599): string {
  return `New Boot ${fiyat}`;
}

console.log(inidirim());
console.log(inidirim(700));
