/*
  ! Access Modifiers (Erişim Belirteçleri)
  * Class elemanları hassas bilgileri tutucakları zaman
  * bu bilgileri class'ın dışından erişilipp erişilmiyeceğini
  * belirten ifadeler.
  * Örneğin kredikartı bilgelerini tutan bir claass olsun
  * burada kart bilgilerinin dışarıdan erişilmesi güzevlik
  * zaafiyeti oluşturucağından. Bilgignin erişmiminin
  * kısıtlnaması gerekir.
  
  ! 3 adet erişim belirteci vardır
  * public: hem class dışında hemde class'ı extend eden diğer classlar erşibilir.
  
  * protected: sadece class'ın kendisi ve onu miras alan diğer class'lar erişebilir.

  * private: Sadece tanımladığımız class tarafından erişilebilir, extend edenler veya dışırdan erişilemez.
  */

//! Public
class Arac {
  public marka: string;

  constructor(marka: string) {
    this.marka = marka; // kendi içerisinden
  }
}

class Motor extends Arac {} // buradada erişebilirim

const ford = new Arac('Ford');
console.log(ford.marka); // dışarıdan erişildi

//! Protected
class EvcilHayvan {
  protected ad: string;

  constructor(ad: string) {
    this.ad = ad; // kendi içinden erişim
  }
}

class Kopek extends EvcilHayvan {
  havla() {
    console.log(this.ad + 'havlıyor'); // extend edilenden eriştim
  }
}

const kopek = new Kopek('Boncuk');
// kopek.ad; // dışarıdan erişim yok , hata verir
kopek.havla();

//! Private
class Personel {
  private isim: string;

  constructor(isim: string) {
    this.isim = isim;
  }
  getIsim() {
    console.log(this.isim); // içeriden erişim var
  }
}

class Gumruk_Personel extends Personel {
  isminiYaz() {
    console.log(this.isim); // extend edilenden erişemiyorumz
  }
}

const mahmut = new Gumruk_Personel('Mahmut');
mahmut.isim; // dışarıdan erişim yok

/*
 * Not: Erişim belirteeçli aynı bütün ts'ye özel kodlarda olduğu gibi sadece
 * kodu yazarken geliştrime ortamında işimize yarayan ifadelerdir.
 * Kodu javawscript derlediğiöiz zaman erişim belirlteçleride silinir.
 * yani hepsi public olur.
 */

/* 
*           Kendi İçerisinden  *  Extend Edenler *  Dışarıdan
* public:          ✔                    ✔              ✔           
* protected:       ✔                    ✔              ×
* private          ✔                    ×               ×

*/
