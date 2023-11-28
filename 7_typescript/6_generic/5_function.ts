// aldığı diziyi ters çevirip döndüren bir fonksiyon olsun
// bu fonk her tipte dizi için çalışabilsin
// bunun için generic bir tip alan fonksiyon yazınız
function reverseArr<T>(array: T[]): T[] {
  return array.reverse();
}

const numbers = [123, 45, 346, 21, 34, 2435];
const texts = ['selam', 'merhaba', 'nasılsın'];

console.log(reverseArr<number>(numbers));
console.log(reverseArr<string>(texts));

function xxxxx<T>(param1: T, param2: T): T[] {
  return [param1, param2];
}

xxxxx<number>(3, 4);
xxxxx<string>('hello', 'typscript');

//! Soru
//* İki farklı değeri paramtre olarak alıp
//* Bu iki değeri bir dizi içerisnide döndüren(return) bir fonksiyon yazınız
//* Parametre olarak gelen iki değerin tiplerini generic ile alınız
//* fonksiyonun döndürüdğü değerin tipini belirtmeyi unutmayın
function createArr<T, Z>(value1: T, value2: Z): [T, Z] {
  return [value1, value2];
}

console.log(createArr<number, boolean>(132, true));
console.log(createArr<string, Date>('merhaba', new Date()));
