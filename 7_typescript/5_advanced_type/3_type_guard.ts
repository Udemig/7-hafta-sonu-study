// typescript birden fazla type alabilen değişkenleri
// bulunudkları bloğa göre typelarını kesin olarak belirtebilir
// buda bizim için geliştirme açısından avtaj sağlar

function test(param: string | number) {
  if (typeof param === 'string') {
    // typescript bu koşulun gerçekleşirse
    // param değişkenin kelsin olarak string olucağını algılar
    console.log(param.toUpperCase());
  } else {
    // değişkenin string değilse number olucağı için
    // ts else bloğunda param değişkeini number olarak algılar
    console.log(param.toFixed(1));
  }
}

test('selam');
test(45.123);
