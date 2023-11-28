/* 
 * Generic
 * Bir fonksiyonun type'ın classs'ın veya interface'in 
 * bazı türlerininn dinamik olarak değişebilmesini sağlayan
 * yapıdır.
 
 * Typescript'deki generic fonksiyonlar'daki parametre özelliğinin
 * type için olan versiyonudur. 
*/

/*
  ? 1- Fonksiyonlarda Generic Kullanımı:
  * mesela `useState()` fonksiyonun ele alaılm. Bu fonksiyonun parametresine
  * string bir değer yazdığımızda state değişkenini türnün de gönderdiğimiz
  * parametrenin tipine göre dğeişmesini isteserssem generic kullanırız
  
  * Bir fonksiyon içerisinde generic nasıl tanımlanır?
  
  - Bir generic her türde değer alabilir.
  - Generic type'lar tanımlanan fonksiyonun içerisnde heryerde kullanbilir.
  - Generic tipi foonksitonlarda fonksiyonu ismini bitişine ve parametre
  - - kısmını öncesine "<>" içerisnde alabiliyoruz.
  - Bir fonksiyona isteğidmiz kadar generic type tanımlayabilriz. 
*/

// Burada tanımladığımız fonksiyonda parametre tipi
// ve döndürdüğü değerin tipi sabit olduğundan
// bu fonksiyonu string veya diğer veritpleri için
// kullanmıyoruz.
// Generic kullanrak eğerki fonksiyonda tanımladığmız tipi
// de parametre olarak alırsak sorunu çözeriz
const getRandomNumber = (array: number[]): number => {
  const i = Math.round(Math.random() * array.length); // 0-10 arası cevap verir

  return array[i];
};

const getRandomString = (array: string[]): string => {
  const i = Math.round(Math.random() * array.length); // 0-10 arası cevap verir

  return array[i];
};

console.log(getRandomNumber([123, 5, 6, 234, 78, 123]));
console.log(getRandomString(['merhaba', 'as', 'deneme', 'naber']));

// Generic kullarnak sorunu çözelim
const getRandom = <Param_Type>(array: Param_Type[]): Param_Type => {
  const i = Math.floor(Math.random() * array.length); // 0-10 arası cevap verir

  return array[i];
};

const sum1 = getRandom<boolean>([true, false, true, true, false]);
const sum2 = getRandom<string>(['merhaba', 'naber', 'iyi', 'sen']);
const sum3 = getRandom<number>([123, 456, 435, 123, 4356, 12]);
// normalde typescript generic tip alan fonk. param gönderidğim adna
// o paramın tyipini generic tip oalrak göndrir ve bizim generiği
// göndermemize gerke kalmaz.yine de beklenmedik durumlar oluşması
// için her zmaan generic tipi bizim göndermemiz dah sağlıklı
const sum4 = getRandom([123, 456, 435, 123, 4356, 12]);

console.log(sum1, sum2, sum3);
