/*
 * Object Type:
 * Normalde primitve oalrak bir "object" type'ı var.
 * Ama genelde bunu kullanmayı tercih etmeyiz.
 * Genelde daha sepesifik sahip olduğu özelliker belirli olan 
 * objelerle çalışırız.
 * Bu sayede  hem özelliklerin typeları belirli olan objeler
 * tanımlamış oluruz hem de typescripti otomatik tamamlama desteği
 * sayesinde yazım hatalarında kurulup hızlanırız

*/

// değişkenin tip tanımını yapma
let student_4: {
  id: number;
  firstname: string;
  lastname: string;
  isGraduated?: boolean; // "?" sayesinde tercihen tanımlarız
};

// değişkeni değerini value^su tanımlayalım
student_4 = {
  id: 123,
  firstname: 'ali',
  lastname: 'kaya',
  isGraduated: false,
  //   date:"" ekstra değer tanımlayamıyoruz
};

let user3: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string | number;
      lng: string | number;
    };
  };
  phone: string | number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

user3 = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: -37.3159,
      lng: 81.1496,
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

// otomatik tamamlama desteği
console.log(user3.email);
console.log(user3.name);
