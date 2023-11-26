/*
 * Interface'ler faklı bir/birden-fazla interface'in özelliklerini
 * miras alabilir.
 * Miras alma işlemini "extends" anahtar kelimesi ile yapabiliyoruz.
 * Abstract class'lardan interface'i ayıran en temel özellikde
 * interface'in birden fazla interface'i miras alabilmesidir.
 */

// Bir interface'İn özelliklerini miras alıp
// üzerine yenilerini ekledik.
interface IMobilya extends IEvEsyasi {
  renk: string;
}

// interface'e uygun bir obje tanımı
const masa: IMobilya = {
  isim: 'Yemek Masası',
  fiyat: 3000,
  renk: 'Siyah',
};

interface IEvEsyasi {
  isim: string;
  fiyat: number;
}

interface IElektronik {
  marka: string;
  garanti_sure: Date;
  garantiUzat: (prop1: number) => void;
}

// birden fazla interface'i miras alma
interface IElektronikUrun extends IEvEsyasi, IElektronik {
  durum: 'iyi' | 'normal' | 'kötü'; // miras alınanların üzeirine yenisini ekledik
}

const tele: IElektronikUrun = {
  isim: 'Akıllı TV',
  fiyat: 200000,
  garanti_sure: new Date(),
  marka: 'Samsung',
  durum: 'normal',
};

//* Bir Alışveriş Sepeti için interface yazınız
//* içerisinde en az bir tane method olsun
//* Ardından Bu ınterface'e göre bir nesne oıluşturun
//* ve nesnenin değerlerini tanımlayın
//* isteyneler faklı bir eleman için interface oluşturabilir.

//* Örnek1
interface Developer {
  isim: string;
  bildigiDiller: string;
  tecrübeYıl: number;
  muhendis: boolean;

  tanit(): void;
}

const kisi: Developer = {
  isim: 'zafer',
  bildigiDiller: 'javascript',
  tecrübeYıl: 3,
  muhendis: false,

  tanit(): void {
    console.log('Ben bir garip developerım');
  },
};

// örnek2
interface IAlisVerisSepeti {
  SepetiHesapla(): number;
  marketAdi: string;
  aslisVerisListesi: Object[];
  alisverisButcesi: number;
  isButceAsildi: boolean;
  ListeyiYazdir();
}

class MyAlisverisSepeti implements IAlisVerisSepeti {
  ListeyiYazdir() {}
  SepetiHesapla(): number {
    if (this.alisverisButcesi > 5000) {
      this.isButceAsildi = true;
      return 5000;
    }

    return this.alisverisButcesi;
  }
  marketAdi: string = 'bim';
  aslisVerisListesi: Object[] = ['un', 'şeker'];
  alisverisButcesi: number;
  isButceAsildi: boolean;
}
