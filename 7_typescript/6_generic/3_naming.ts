/*
 * Değişken isimlendirme kurallarına göre isimlendirirleri.
 * Yazılım camiaında genelde tek krakter ve büyük hraf ile kullanılır.
 * Bunun sebbei generic tiplerin diğer tiplerle vedeğişkenerle karıştırılması
 * ve tip olarak neyin geliceğinin belli olamması
 * Bu yüzden genellikle amacaı yansıtan tek bir harf kullanıyoruz
 
 * * T: Type
 * * R: herhangi bir type
 * * Z: herhangi bir type 
 * * E: Error Type
 * * K: Key Type
 * * V: Value Type
 * A,B,C,D,E,F,G
 
 * Bunlar sadece yaygın kullanılanlar
 * Bunların yetmedği durumda biz siimlendiririz
 */

type ExaType<K, V, E, T> = {
  key: K;
  value: V;
  error: E;
  username: T;
};

const exa_object: ExaType<string, number, object, string> = {
  key: 'deneme',
  value: 34,
  error: {},
  username: 'ali',
};

// örnek
type API_ResponseType<T, E> = {
  data?: T;
  error?: E;
};

const response: API_ResponseType<object, number> = {
  data: {
    products: [],
  },
  
  error: 404,
};
