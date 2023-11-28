/*
 * Array:
 * Ts tarafında her dizin alabaliceği verinin tipini tanımlayabiliyoruz.
 * Tanım:
 * veri_tipi[]
 */

const students: string[] = ['ahmet', 'mehmet', 'ayşe'];

// bütün dizi methodları da bu tipe uygun çalışır
students.push('ali');
students.unshift('mehmet');

const ages: number[] = [10, 30, 56];
const has_licence: boolean[] = [true, false, true];

// değeri değiştirmeye çalıştığımızda tip desteği sağlar
students[2] = 'deneme';

/*
 * Normalde dizini alabileceği tek tür olması beklenir.
 * Bazı durumlarda birden farlkı türde veri alan diziler olabilir.
 * Birden fazla tipi bir arada tanımlamak için union types (birleşmiş tipler)
 *
 * Union type oluşturmak için | kullanılır. "ya bu type olsun yada bu type"
 */

// dizide ya string yada null olsun
const teachers: (string | null)[] = [
  'uğur',
  null,
  'ahmet',
  'ali',
  null,
];

// ya string dizisi yada number dizisi olsun
let test_arr: string[] | number[];

test_arr = ['asdas', 'sadasd', 'adasd'];
test_arr = [45, 67, 89, 90, 12];
