// Düz Js'de getter ve setter method örneği
class Car {
  private battery_power: number = 10;
  private key_status: 0 | 1 | 2 = 0;
  private stater_motor_running: boolean = false;
  private engine_started: boolean = false;

  // Mevcut bir poperty'nin değerini return eden fonksiyonlar getter method denir.
  getEngineStatus() {
    return this.engine_started;
  }

  // setter bir methoddur
  startEngine() {
    if (this.battery_power <= 0) {
      throw new Error('Akü Arzalı veya Boş');
    }

    if (this.key_status != 2) {
      throw new Error('Lütfen anahtarı tamamen çervirin');
    }

    this.engine_started = true;
    this.battery_power--;
  }

  // setter bir mtehod
  insertKey() {
    this.key_status = 0;
    return this;
  }

  // setter bir method
  turnKey(level: 0 | 1 | 2) {
    if (level == 2) {
      this.stater_motor_running = true;
    } else {
      this.stater_motor_running = false;
    }

    this.key_status = level;
  }
}

const tesla = new Car();

tesla.insertKey();
console.log('insert key çalıştı', tesla);

tesla.turnKey(2);
console.log('turnKey  çalıştı', tesla);

tesla.startEngine();
console.log('startEngine çalıştı', tesla);

console.log(tesla.getEngineStatus());

/*
 * Yukarıdaki yöntem global olarak hem typescript'de hem diğer dillerde kullanılan
 * bir yöntemdir. Bu yöntemde methodların property'lerle olan ilişkisne göre kavramsal
 * olarak getter  veya setter şekline isimlendlirilmesi söz konusudur
 */

// Typescript'te getter ve setter oluşturmak için özel bir yazım stili bulunmaktadır

class Example_Class {
  /*
       Eğerki typescriptin sahip olduğu get ve set özelliğini kullanıyorsak
       değişkenin isminin getter ve setter methodlarla eşit olmaması için
       isminin başına _ koyarız
    */
  private _username: string = '';

  //  TS'ye ait olan bu yöntemi kullanrak getter method yazabilitiz
  //  getter methodlar mutlak bir değer döndrümek zorunda
  get username() {
    console.log('username değerine erişlmeye çalıştı');
    return this._username;
  }

  // Bir setter method tanıladğımız zaman fonksiyonun sadece 1 parametresi olmalı
  // Ve bir değer dödürmemeli. Aksi halde hata verir
  set username(param1: string) {
    console.log('setter method devreye girdi gelen param: ', param1);
    this._username = param1;
  }
}

const exa = new Example_Class();

// bir getter methoduna erişme
exa.username;
console.log(exa);

// bir setter methodunu kullanma
exa.username = 'Furkan';
console.log(exa);

//! Getter Setter Örnek
class Circle {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  // get ile radius özelliğine erişme
  get radius() {
    return this._radius;
  }
  // set ile radius değerini değiştirme
  set radius(value: number) {
    if (value < 0) {
      console.log('Geçersiz yarıçap. Negatif olamaz');
      return; // fonksiyonu durdur
    }
    this._radius = value;
  }

  // hesaplama yapan getter methodu. area isminde özellik olmadığı için klasik kullanım yaptık
  getArea() {
    return Math.PI * this._radius * this._radius;
  }
}

const newCircle = new Circle(5);

console.log(newCircle.radius); // 5

newCircle.radius = 7;

console.log(newCircle.radius); // 7

console.log(newCircle.getArea()); //155.3454
