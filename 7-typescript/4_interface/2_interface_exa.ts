// Bir kişiin interface'ini oluşturalım
interface Adress {
  street: string;
  city: string;
  zipCode: string;
}

interface Education {
  degree: string;
  school: string;
  graduationYear?: number;
}

interface Job {
  title: string;
  company: string;
  startDate: Date;
}

interface Person {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  adress: Adress; // farklı bir interface kullandık
  education?: Education; // opsiyonel bir alan tanımladık
  job?: Job[]; // birden fazla işte çalışabilir veya hiç işi olamaybidilir

  sayHello(): string;
}

const faruk: Person = {
  id: 1,
  firstname: 'Faruk',
  lastname: 'Kaya',
  age: 45,
  adress: {
    city: 'İzmir',
    street: '4562sk',
    zipCode: '35510',
  },
  education: {
    degree: '56',
    school: 'Deneme Üni.',
    graduationYear: 2020,
  },
  job: [
    {
      company: 'X Şirketi',
      startDate: new Date(),
      title: 'FrontEnd',
    },
  ],
  sayHello() {
    return 'Merhabalar ben ' + this.firstname;
  },
};

// Interface'leri class'ların tipini tanımlarken
// kullanabiliriz
interface IMusicPlayer {
  api: string;

  play(song: string): void;
  pause(): void;
}

// Objelerde interface kullanımı
const Spotify: IMusicPlayer = {
  api: 'www.spotiy.api',

  play(song) {
    console.log('Spotify veritabanı ile iletişime geçildi');
    console.log(song + ' çalıyor...');
  },

  pause() {
    console.log('Çalan müzik durduruldu');
  },
};

// Class'larda interface kullanımı
class AppleMusic implements IMusicPlayer {
  api: string = 'ww.apple.api.com';

  play(song: string): void {
    console.log('apple müzik veritabanı ile iletşime geçiliyor');
    console.log(song + ' çalıyor...');
  }

  pause(): void {
    console.log('Çalan müzik durduruldu');
  }
}
