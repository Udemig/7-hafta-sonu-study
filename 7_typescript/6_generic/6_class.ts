// Generic'tiplerin class'lar ile kullanımı
class Sorter<T> {
  constructor(private data: T[]) {}

  sortData(): T[] {
    return this.data.sort();
  }
}

// sayıdı dizisi için kullanılıö
const numbers = new Sorter<number>([123, 56, 4123, 453, 123]);

const strings = new Sorter<string>(['ahmet', 'mehmet', 'fatma']);

console.log(numbers.sortData());
console.log(strings.sortData());

// generic sını örnek 2
// tipi generic olarak alsakda bazen kısıtlama
// yapmak isteyebiliriz
// mesela aşşağıdaki örnekte generic olareak aldığımız T tipinin
// string,number,boolean dışında bir değer almamasını sağlaylım
class Container<T extends number | string | boolean> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

// yukarıda yaptığımız kısıtlamaya uygun bir generic tip gönderlim
const ex_container = new Container<string>('Merhabalar');
console.log(ex_container.getValue());

// kısıtlamının dışarısna çıkmaya çalışalım
const ex2_container = new Container<object>({ id: 123 });
