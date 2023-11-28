/*
 ! Readonly (Salt Okunur) Property
 * Typescript'de bir sınıfın özelliğini veya bir nesnenin özelliğini
 * sadece okunabilir yapmak için kullanılan bir özelliktir.
 * Readonly ile tanımladığımız özellikler class'larda sadece
 * constrcutor kısmında değiştrilebilir nesnelerde ise hiç değiştrilemez.
 */

class Kitap {
  public readonly isim: string;
  public sayfa: number;

  constructor(isim: string, sayfa: number) {
    this.isim = isim; // readonly özellikler constructor içerisinden değiştirlebilir
    this.sayfa = sayfa;
  }

  setYeniSayfa(yeniSayfa: number) {
    this.sayfa = yeniSayfa;
    // this.isim = 'Deneme';
  }
}

const hobbit = new Kitap('Hobbit', 400);
console.log(hobbit.isim);
console.log(hobbit.sayfa);

// hobbit.isim = 'Yüzüklerin Efendisi';
hobbit.sayfa = 45;
