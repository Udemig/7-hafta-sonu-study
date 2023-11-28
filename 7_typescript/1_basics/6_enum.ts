/*
 * Enum (numarlandırma):
 * Belirli değerler kümesi
 * Elelman sayısı değişmeyecek olan dataları ifade etmek için kullannılır.
 * Genellde az miktara sahip olan veri guruplarını tanımlamak için tercih ederiz.
 * Enumları isimlendiriken sonuna "enum" koymak faydlarıdır
 * İsimlendirirken değişken isimlendirme kurlarrına sadık kalırız.
 */

enum RenklerEnum {
  Kirmizi = 'Kirmizi',
  Yesil = 'Yesil',
  Sari = 'Sari',
}

let arabanin_rengi = RenklerEnum.Yesil;

console.log('deneme', arabanin_rengi); // "Yesil"

// haftanın günleri
enum Gunler {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let bugun = Gunler[2]; // Carsamba
let yarin = Gunler.Persembe; // 3
let gun = Gunler[Gunler.Pazar]; // Pazar

console.log(bugun);
console.log(yarin);
console.log(gun);

enum Durum {
  Hazirlaniyor,
  Gonderildi,
  TeslimEdildi,
}

Durum.Hazirlaniyor;
