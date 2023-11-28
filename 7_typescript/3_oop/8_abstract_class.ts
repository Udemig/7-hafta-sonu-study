/*

* Abstract Class (Soyut Sınıf)
* Abstract Class'lar alt sınıflar için bir şema görevi görür
! Doğrudan örneklerini oluşturamayız
* Alt sınıfların ortak davranışlarını tanımlamak için kullanırız

*/

abstract class TakePhoto {
  constructor(cameraMode: string, filter: string) {}

  // abstract birr method tanımlama
  // görüldüğü üzere methodun görevini henüz tanımlamadık
  // çünkü instagramda ki görevi farklı twitter'daki görevi farklı olucak
  abstract share(send_to: string): void;
}

// new TakePhoto(); // SOYUT SINIFLARIN DOĞURDAN ÖRNEKLERİ OLUŞTURLAMAZ (methodları yarım)

// Ama abstract class'ın özelliklerini ve methodlarını miras alan
// yeni bir class oluşturup. Oluşturdğumuz bu class'ın içerşsnde
// yarım kalan / görevini tanımlanmamaış / implement edilmemiş olan
// methoları tamamlayıp bir örneğini oluşturabiliyoruz

class Instagram extends TakePhoto {
  constructor(cameraMode: string, filter: string, zoom: number) {
    super(cameraMode, filter);
  }

  share(send_to: string): void {
    // burada abstact olan yani görevi
    // görevi tanımlanmamış olan fonksiyonun
    // görevini tanımlıyoruz
    console.log('Çekilen fotoğraf ' + send_to + ' ile paylaşılıyor');
  }
}

const insta = new Instagram('front', 'gece', 5);
insta.share('mehmet');

class Twitter extends TakePhoto {
  constructor(cameraMode: string, filter: string, tweet_id: number) {
    super(cameraMode, filter);
  }

  share(send_to: string): void {
    // burada abstact olan yani görevi
    // görevi tanımlanmamış olan fonksiyonun
    // görevini tanımlıyoruz
    console.log(
      'Çekilen fotoğraf ' + send_to + ' kişisine tweet olrak atıldı'
    );
  }
}
