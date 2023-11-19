/*
 * Custom Type:
 * Bugüne kadar hep primitive type'ları kullandık.
 * Fakat gerçek dünya problerimde o anki yaptığımız işe özel daha spesik
 * type'lara ihtiyaç duyarız.
 * Bunları yazxmak için "type" keyword'üne ihtiyaç vardır.
 *
 *
 *  Neden İhtiyacım var'a Örnek:
 *  Çünkü belirlediğim bir type'ı projenin bir den çok
 *  alanında kullanmak isteyebiliriz. Bu durumda
 *  yapabileceğim tek şey kopyala yapıştır yaparak
 *  kod kalabılığı oluşturmak ama custom type sayesinde
 *  bir type tanımlayıp projenin heer alanında type'a
 *  verdiğim issmi çağırarak kullanbiliriz.
 *
 */

type User = {
  id: string;
  name: string;
  age: number;
  userType: 'admin' | 'user' | 'owner'; // string literal types
};

let foo: User = {
  id: 'ewdsf214',
  name: 'Ahmet',
  age: 546,
  userType: 'owner',
};

let foo2: User = {
  id: 'ewdsf214',
  name: 'Ali',
  age: 45,
  userType: 'user',
};

// Tanımladığımız type artık type olarak atam yapabileceğim
// her yerde kullanılabilir
const user_list: User[] = [
  { id: 'asdf123', name: 'asda', age: 56, userType: 'admin' },
  { id: '234hjgf', name: 'ali', age: 36, userType: 'owner' },
];

function deneme(a: User): User {
  return a;
}
