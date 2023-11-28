/*
 * Function Type:
  * Typescriptte ve javascriptte 5 farklı yöntem ile fonksiyon
  * tanımlayabiliyoruz:
  *
  * 1- İsimli Fonksiyon
  * 2- İsimsiz Fonksiyon
  * 3- Arrow(Ok) Fonksiyon
  * 4- Sing line(teksatır) Ok Fonkiyon
  * 5- Immediate call function  
  * 
  * 1 ve 5 hariç diğer fonksiyon türleri değişkene
  * atanarak yazaılan fonksiyonlardır. Bir değişken
  * varsa onun değeri olcauğı için bu tipteki fonksiyonların
  * tür'lerini typescript ile belirlemeiz gerekit.
  * 
  * Fonksiyon türünden kastımız fonksiyonun aldığı 
  * parametrelerin ve dödnürüğü deperlerin tipi
  * Bunların tanımlayınca fonksiyonun tipi tanımlanmış olur

*/

//? 1- İsimli Fonksiyon
function hesaplama(a: number, b: number): string {
  return 'Hesaplama Sonucu' + (a + b);
}

//? 2- İsimsiz Fonksiyon
const noNameFunc = function (par1: number): number {
  return par1 * 7;
};

//? 3- Ok Fonksiyon
const arrowFunc = (par1: number): number => {
  return par1 * 5;
};

//? 4-a Tek Satırda Ok Fonksiyon
const singleLineFunc = (par1: number): number => par1 * 10;

//? 4-b Fonksiyon Tanımı yaparken type keyword kullanmak
const singleLineFunc2: ExamleFnType = (par1) => par1 * 10;

// Fonksiyonların tipini type anahat kelimesi ile tanımalama
// Bu şekilde tanımladığımız aynı tipi bir den çok kez kullanabiliyoruz
type ExamleFnType = (par1: number) => number;

// 2 farklı sayı alıp çarpımlarını geri döndüren bir fonksiyon
// öncelikle type'Inı yazıcaz ardından fonksiyonu yazalaım

// 1- Type tanımı
type MathFnType = (a: number, b: number) => number;

// 2- Type'a göre fonksiyon tanımı
const newFunc: MathFnType = (a, b) => {
  return a * b;
};

const sonuc = newFunc(10, 99);
console.log(sonuc);

// Kişinin bulunuduğu konumu ve oranın derecesni parametre olrak alıp
// Geriye Merhaba, ... konumundaki hava derecesi ... derece. Bir metin
// return eden fonksiyon hem type'ını hemde kendisini yazınız.
type useLocType = (loc: string, degree: number) => string;

const useLoc: useLocType = (loc, degree) => {
  return `Merhaba, ${loc} konumundaki hava derecesi ${degree} derece`;
};

console.log(useLoc('İzmir', 5));

// Imeddiately Invoked Function
// Hemen Çağrılan fonksiyon
// Tanımlandığı gibi çağrılan fonksiyonlara veridğim isimdir
// Dosya içerisnde bire daha kullanılmıyacak sadece dosya ilk okunduğunda
// bir kere çalışması gereken  fonksiyonları bu şekilde tanılayabiliyoruz
const sonuc2 = (function (a: number, b: number): number {
  return a + b;
})(10, 99);

console.log(sonuc2);
