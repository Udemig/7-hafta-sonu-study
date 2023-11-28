/*
 * Type Annotation:
 * Javascript'te değişikenin türünü belirleme gibi bir özellik yok.
 * Fakat typescript'de tanımladığımı değişkenlerin tiplerini belileyebiliyoruz.
 */

let surname: string = 'hasan';

surname = 'mehmet';
surname = 'ali';

let age: number = 10;

age = 30;

/*
 * Primitive Types:
 * boolean
 * string
 * number
 * object
 * undefined
 * null
 * symbol (pek kullanılmaz)
 * bigint (pek kullanılmaz)
 */

let name2: string = 'mehmet';

let age2: number = 30;

let has_licence: boolean = true;

let student: object = {
  id: 1,
  name: 'mehmet',
  year: 2001,
};

let value: null = null;
let another_value: undefined;
