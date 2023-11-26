/*
 * Intersection Types (Kesişim Tipleri)
 * Typescript'de iki veya daha fazla tipi birleştirmek için
 * kullanılan bir özelliktir.
 */

// 1) Type Tanımla
type Car = {
  brand: string;
  model: string;
  startEngine(): void;
};

// 2) Farklı Type
type Electric = {
  chargeBattery(): void;
};

// 3) Ikı Type'i birleştir
type ElectricCar = Car & Electric;

// 4) Bir nesne oluştur
const teslaModelS: ElectricCar = {
  brand: 'Tesla',
  model: 'Model S',

  startEngine() {
    console.log(`${this.brand} elektrlikli motoru çalıştı...`);
  },

  chargeBattery() {
    console.log('Batarya şarj oluyorz');
  },
};

teslaModelS.startEngine();
teslaModelS.chargeBattery();
