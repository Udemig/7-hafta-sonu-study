// Abstract Sınıf
abstract class DataFetcher {
  constructor(apiURL: string) {}

  // Abstract Methodlar
  abstract getData(apiKey: string): object[];
  abstract deleteData(id: string, apiKey: string): void;
}

// Abstract Sınıfı Miras alarak yeni bir sınıf oluşturucaz
// Sınıfın içindeki abstract methodları tamamlıyacaz.(implement etme)
class Spotify extends DataFetcher {
  // soyut sınıfta tipi tanımlanana ama görevi tanımlanmayan
  // methodu implement ettik
  getData(apiKey: string): object[] {
    console.log('api ile habeleşliyor...');

    const response = {
      ok: true,
      status: 200,
      data: [{ name: 'Müzik1' }, { name: 'Müzik2' }],
    };

    return response.data;
  }

  deleteData(id: string, apiKey: string): void {
    console.log(id + ' li eleman için silme isteği atıldı');

    const response = {
      ok: true,
    };
  }
}

const spotify = new Spotify('www.api/spotify.com');

console.log(spotify.getData('asd13243'));
spotify.deleteData('id123', 'asd13243');

// Abstarct sınıfı yine miras alana ama bu sefer
// methodlarını farklı şekilde implement eden
// bir sınıf daha oluşturalım
class Shazam extends Spotify {
  getData(apiKey: string): object[] {
    console.log('Api ile haberleşilir...');
    const res = {
      ok: true,
      data: [{ name: 'Müzik1' }, { name: 'Müzik2' }],
    };

    const newData = res.data.map((i) => ({
      title: i.name,
      id: new Date().getTime(),
    }));

    return newData;
  }

  deleteData(id: string, apiKey: string): void {
    console.log(id + 'id li eleman siliniyor...');
  }
}

const shazam = new Shazam('www.api/shazam.com');

console.log(shazam.getData('asf55y'));

shazam.deleteData('gfd34', 'gdf3245');

// Özetle Abstract sınflar, diğer sınıfların genel davranışlarını
// belirlemek için kullanılır. Ve Doğrudan örnekleri oluşrulamazlar.
// Bu class'ı miras alan diğer class bu ortak methodların görevlenini tanımlar
