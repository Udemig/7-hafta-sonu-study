/*
 ! Interface
 * Interface, bir nesnenin yapsını ve bu nesnenin
 * hangi özelliklere ve methodlara sahip olucağını belirler
 
 ! Custom Type | Abstract Class | Interface
 * Birbine benzer görevler yapmaktadır

 * Abstract Class - Interface Farkları:
 * Class'lar sadece bir class'ı miras alabilir yani exten edebilir.
 * Interface ise birden fazla farklı interface'i miras alabilir.
 * Interface'lerde erişim belirtec iyoktur.
 
 * Type - Interface Farkları:
 * Tanımlama Yöntemi farklı
 * Extend ve Implement Yetenekleri farklı

 ! Interface Özellikler
 * Interface'leri ismlendiriken 
 * ya değişken isminin sonuna "Interface" takısı eklenir
 * ya da değişken isminin başına "I"  takısı eklenir
 
 * Yazılı olmayan bir kuraldır. Yazılımcılar birbirin yazıdğı kodu
 * daha rahat interfac e olduklarını anlaybilmeleri için yapılır.  
 */

interface PropInterface {
  data: string[];
}

interface IProp {
  data: string[];
}

// İleride oluşturucağımız bir geometrik şekil nesnesini
// özelliklerini tipini tanımladığımız bir interface yazalım

interface IShape {
  width: number;
  height: number;
  radius?: number;
  calculateArea(): number | string; //methodun görevini tanımlamayız
}

// Type'ı yukarıda tanımladığımı interface ile tanımlanmış olan
// bir nesne oluşturalım
const square: IShape = {
  height: 200,
  width: 200,

  calculateArea() {
    return this.width * this.height;
  },
};

const circle: IShape = {
  width: 50,
  height: 1,
  radius: 25,

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  },
};

function deneme(param: IShape) {}
