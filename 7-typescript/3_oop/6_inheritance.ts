/*
  * Inheritance (Kalıtım | Miras):
  * Bir OOP kavramıdır bir sınıfın başka bir sınıfın özelliklerini ve
  * methodlarını miras almasına izin verir.
  * Bu işlem kodun tekrar kullaıbilirliğini artırır ve kod orginazasyonunu
  * geliştirir. Miras genellikle "anasınıf | üstsınıf" 'tan türelimiş olan
  * alt sınıflar arasında gerçekleşir
   
  * Üst Sınıf (Base Class | Parent Class): Genel özelliklere ve 
  * davranışlara sahip olan. Farklı sınıflar tarafından miras alanıabilen class.
  
  * Alt Sınıf (Derived Class | Child Class): Bir üst sınıftan miras alarak
  * özelliklerini ve davranışlarını genişletebilen. Üst sınıftan türetilen sınıf.


*/

// Parent Class
class GeometrikSekil {
  constructor(public ad: string) {}

  // ortak bir davranış
  tanim() {
    console.log(`Bu bir ${this.ad} Geometrik şeklidir`);
  }
}

// Child CLass
class Dikdortgen extends GeometrikSekil {
  private uzunluk: number;
  private genislik: number;

  constructor(uzunluk: number, genislik: number) {
    // üst sınıfın constructor'ını çağırma
    super('Dikdörtgen');

    this.uzunluk = uzunluk;
    this.genislik = genislik;
  }

  //   method override > parent aldığımız methodu değiştirdik
  tanim(): void {
    super.tanim(); // kapsayıcaki methodu miras alır
    console.log('selam');
  }

  // alanı hesaplar
  alanHesapla() {
    return this.uzunluk * this.genislik;
  }
}

// Child CLass
class Daire extends GeometrikSekil {
  private yariCap: number;

  constructor(yariCap: number) {
    super('Daire');
    this.yariCap = yariCap;
  }

  alanHesapla() {
    return Math.PI * this.yariCap * this.yariCap;
  }
}

const dikdortgen = new Dikdortgen(6, 12);
dikdortgen.tanim();
console.log(dikdortgen.alanHesapla());

const daire = new Daire(6);
daire.tanim();
console.log(daire.alanHesapla());

// Birden fazla kalırtım
class Human {
  eye_color: string;
}

class Father extends Human {
  eye_color: 'kahve_rengi';
}

class Mother extends Human {
  eye_color: 'mavi';
}

class Son extends Father {}

const hasan = new Son();
console.log(hasan.eye_color); // türü "kahve_reng,". .çünkü father class'ını miras alıyor.
