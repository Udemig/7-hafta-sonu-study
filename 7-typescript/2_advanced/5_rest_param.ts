/*
 * Rest Param
 * Parametre listesinin belirsiz ve sınırsız olduğu 
 * durumlarda rest parametre kullanılır

 * Özellikler
 * Bir parametreyi rest param haline getirmek için spread
 * (...) opertör kullanılırız.
 
 * Bir rest parametresinden sonra baika bir parametre yazılmaz.
 * Çünkü gönderilen bütün parametreler rest param.ın bir parçası gibi algılanır 
 
 * Gönderilen bütün parametreler rest ile dizi haline getirlir
 */

function toplam(metin: string, ...sayilar: number[]) {
  return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(toplam('merhadba', 1243, 6758));
console.log(toplam('deneme', 10, 99, 992, 2134, 567));
console.log(toplam('test', 10, 99, 992, 2134, 567, 5678567, 2544326));

// Aldığı ilk iki paramtreyi toplayan
// İlk ikinin devamında  aldığı bütün parametreleri çarpan
// bir fonksiyon yazınız
// fonksiyon sonuç olarak ilk ikisin toplamını diğerlerinin
// çarpımını bir obje olarak döndürsün
// çarpılacakları rest param olarak tanımlaynız
type ResType = {
  toplam: number;
  carpim: number;
};

// Cevap-2:
function hesapla2(
  sayi1: number,
  sayi2: number,
  ...sayilar: number[]
): ResType {
  // ilk iki parametrenin toplamı
  let toplam = sayi1 + sayi2;

  // geriye kalan param'arın çarpımı
  let carpim = sayilar.reduce((toplam, sayi) => toplam * sayi, 1);

  return { toplam, carpim };
}

console.log(hesapla2(60, 40, 123, 12, 45, 78, 34, 12));

//  Cevap-3:
function deneme(
  num1: number,
  num2: number,
  ...numbers: number[]
): {} {
  const total = num1 + num2;
  const carpim = numbers.reduce((carp, i) => carp * i, 1);

  const obje = {
    total,
    carpim,
  };
  return obje;
}

// Cevap-1:
function hesapla(a: number, b: number, ...sayilar: number[]) {
  let x = a + b;
  let y = sayilar.reduce((carpim, sayi) => carpim * sayi, 1);

  const objez = {
    toplamlar: x,
    carpimlar: y,
  };
  return objez;
}

console.log(hesapla(50, 40, 4, 7, 9, 12, 78, 34));
