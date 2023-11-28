// Bir türü tanımlarken generic kullanımı
// yine türün dinamik olmasını ve
// type'Iın yeniden kullanıailir olmasını sağladık
type ArrayType<T> = {
  items: T[];
  addItem: (item: T) => void;
  getItem: (i: number) => T;
};

// yukarıdaki türü kullanrak bir nesne oluşturma
const strArr: ArrayType<string> = {
  items: ['deneme', 'selam', '123', 'merhaba'],

  addItem(item) {
    this.items.push(item);
  },

  getItem(i) {
    return this.items[i];
  },
};

const numberArr: ArrayType<number> = {
  items: [12, 45, 123, 456, 466, 78],

  addItem(item) {
    this.items.push(item);
  },

  getItem(i) {
    return this.items[i];
  },
};
