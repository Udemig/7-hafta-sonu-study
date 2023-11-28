/*
 * Optional Param (Opsiyonel Parametre)


* Normal şartlarda fonksiyonun tüm parametlerini doldurmak şarttır.Fakat Bazı
* durumlarda gereken bazı durumnlarda gerekmeye n parametreler olabilir.
* Bu durumda bu parametreyi opisyonel yaparız

* Özellikler:
* tanım: (a:number,b?:string)
* Opsiyonel parametrlere istersek undfined değerini gönderebiliriz.
* İstersek hiç değer göndermeyebiliriz.

* Opsiyonel parametreye değer göndermezsek bu parametre nin değeri ve 
* tipi undefined olur

* Opsiyonel parametreler hep en sonda yer alamalı opisiyonel bir
* parametrenin ardından zorunlu parametre gelemez

* Deeğer gönderirken ya belirlediğim tipe uygun değer gönderiziz
* yada hiç göndermeyiz
*/

function exampleFn(
  param1: number,
  param2: string,
  param3?: object,
  param4?: number
) {
  console.log('>> param1:', param1, typeof param1);
  console.log('>> param2:', param2, typeof param2);
  console.log('>> param3:', param3, typeof param3);

  console.log('----------------------');
}

exampleFn(10, 'selam', { id: 1 }); // 3 parametreyi tanımladık
exampleFn(10, 'selam', undefined); // opsiyonel olana undefined gönderdik
exampleFn(10, 'selam'); // opsiyonel olanı tanımlamadık
