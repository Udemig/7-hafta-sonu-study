/*
  * "Any" Type: Bir değikene farklı türlerde değer atanmasını istedğiz zaman değişkini
  * türünü any olarak belirleriz.Bu durumda bu değişken javascript'teymiş gibi davranır.
  * Bu değişken için otomatik tamamlam özelliği iptal our.
  * Any olduğunda editor değişkenin hangi değerlere sahip olduğunu bilemez
  * Bu değişkene istedğimiz her türde veri atayabiliriz.
  * 
  * Özelliker:
  * Değişken tanımlarken any kullanıyorsa yani değişkenin değeri süreki
  * farklı veri türlerinde olucaksa genelde any için "let ve var" tercih ederiz
   
  * Normal şartlarda any türünü varlığı ts'e aykırıdıdır.
  * Çünkü typescript'deki amaç her değişkenin türünü belli olmasıdır.
  * Any genelde acil durumlarda tercih ediyoruz.
  * Ör: Api'den gelen veirleri hızlıca kullanıp kullanıcların kullanmına sunulucak.
  * Burda geçici olarak verini tipini any olrak belirleyip daha sonra vaktiimiz olduğunda
  * tipini detaylı bir şekilde tanımlayabiliriz.
  * 
  * Mutlaka any tipleri bir noktada koddan kaldırıp doğru tiplerele tanımlamalıyız.
  * Sadece geçici olarak kullanırız.
*/

let foo: any;

foo = 'selam';
foo = 12312;
foo = true;
foo = [];
foo = {};
foo = undefined;

// type inference
// bazı durumlarda beklenemdedik oluşturbaildiğinden
// ve alışkanlık olması açısından
// type'ın inferance olması yerine
// kendimiz tanımlamak daha sağlıklı
let bar: any = 'deneme';
bar = 2143;

let baz = 545;

function hesapla(a: number, b: number): number {
  return a / b;
}

const sonuc = hesapla(Infinity, 0); // NaN > NOT A NUMBER | Infiniy : Sayı olarak tanımlar

// void:
// genellikle bir fonkiyonun bir şey döndürmediğini ifade etmek için kullanılır
// Yani bir fonksiyonun geriye bir şey döndürmediğini ifade eder
// void varsa return satırı yoktur (varsada undefined döndürür)
// return satırı varsa void yerine ne dödürdüğünü yazarız
function selamla(): void {
  console.log('Merhana Dünya');

  return;
}

selamla();

// Never: hata üreten fonksiiyonlarda kullanılır.
// Örneğin bir fonksiyonun sürekli orlak hata fırlatması durumu
// Genellikle "Hiçbir zaman bu noktaya ulaşılamaz" durumlarını
// ifade etmek için kullanılır
function hataFonkiyonu(message: string): never {
  throw new Error(message);

  let x = 1 + 6;
}

try {
  const sonucu = hataFonkiyonu('selam');
  console.log(sonucu);
} catch (err) {
  console.log(err);
}

/*
 * Sonuç olarak:
 * any de type belli olmadığı için herşey dönebilir
 * void'de hiç bir şey dönmez
 * never'da herhangi bir hata throw edilir (yani return satırı hiç olmaz)
 */
