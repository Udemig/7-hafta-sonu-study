/*
 ! Type Casting:
 * Typescript'de "as" anahtar kelimesi tür dönüşümü için kullanılır.
 * Bu bir değişkenin türünü açışça belirlemek veya değiştirmekkamacıyla 
 * kullanılır.
 * Özellikle union type'da ve any'type da tipi daha net belirlemek içiin
 * kullanılır.
*/

let variable: any = 'Selam, Typescript';

// burada normalde variable değişkeni any tipinde olduğu için
// typescriptin faydarlıdnan yararlanamıyorduk(auto taamamlama)
// bizde sadece kodun bu alanında typescript yardımlar kullanbilmek için
// variable değişkenini as operatorü ile string'miş gibi tabıttık
let strLength: number = (variable as string).length;

// Union type tararfında da type'ı kesinleştimek için kullanabiliriz
function displayData(data: string | number): void {
  // as kullanrak tür kontrolü
  (data as string).toUpperCase();
}

// farklı örnek
let data: (string | number)[] = ['apple', 54, 'banana', 123];

// as kullanark tür dönüşümü
let firstItem = (data[0] as string).toLocaleLowerCase();
let secondItem: number = data[1] as number;
