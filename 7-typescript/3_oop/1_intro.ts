/*
  * OOP (Object Orianted Programming - Nesne Tabanlı Programlama):
  * Bugüne kadar projeler,m,z, hep fonksiyonlar kullanrak geliştirdil
  * Fakat projeleri kapsamı büyüdükçe kullanıdığımız yaklaşım proje yönetimini
  * zorlaştırabiliyor. Buu yüzden mühendisler büyük projeleri yaparken
  * yazılaımcalırın işleini kolaylaştırmak için programlama arayışan girdiler.
  
  * OOP: Etrafımızda bulunan nesnelerin özellik(property) ve davranışlarını(method)
  * modelleyerek yapılan programlama yöntemidir.
   
  * OOP yaklaşımını içerisinde önemliş iki farklı tür bulunur. Bunlar class'lar ve interface'ler dir.
  * Yeni tanışıcağımız kelimeler
  * Class | Interface | Extends | IsntanceOf | Implements
  
  * >> Class (Sınıf)
  * Bir objenin özelliklerini ve davranışlarını bir bütün halinde tutudlduğu yapıdır. 
*/

class Old_Phone {
  // Burası class'ın gövdesidir. Burada property ve methods yer alıcak

  // Örnek property'leri aşşağıya yazalım
  telefon_tipi: 'entegre' | 'ayrılmış' = 'entegre';
  tus_takim_tipi: 'döner' | 'santral' = 'döner';
  govde: string = 'yatay';

  // Örnek method'ları aşşağıya yazalım
  ahizeAc() {
    console.log('Ahize açılıyor....');
  }

  numarayiCevir(telNum: number): boolean {
    console.log('Numara çevriliyor: ' + telNum);
    console.log('Telfon çalıyor');

    return true;
  }

  ahizeKapat() {
    console.log('Ahize Kapatılıyor...');
  }

  /*
    Class içerisndeki bütün elemanların (özellik/method) başlangıç kısmı aynıdır.
    Yani hem özellik hem method doğrudan tanımlanartak yazılır.
    Aradki farkı tanımlarken = beliler.
   : varsas bu bir özelliktir
   : yoksa bu bir methoddur
  */
}

/*
 * Class'ların kullanımı:
 * Bir class'ı tanımlamak aynı bir type'ı veya fonksiyonu tanımlamak gibidir.
 * Bir class'ı kullanmak yani aktif etmek için new keyword'ü kullanılor.
 * Bu sayede bu class'ın çalışan bir kopyasını oluşturmuş oluyoruz.
 * Bu kopyaya'da object(nesne) diyoruz
 */

// Aşşağıdaki satırda yeni bir obje oluşturrduk ve objenin referansını değişken  aktardık.
const antika_telefon = new Old_Phone();

// oluştuduğumuz objenin özelliklerini set ediyoruz
antika_telefon.govde = 'dikey';
antika_telefon.telefon_tipi = 'ayrılmış';
antika_telefon.tus_takim_tipi = 'santral';

// obenin methodlarını çağırma (invoke)
antika_telefon.ahizeAc();

antika_telefon.numarayiCevir(5356343254363);

antika_telefon.ahizeKapat();

/*
  Obje ve class arasındaki ilişki şu şekildedir: Class'lar tanımlanmış olan iafedelerdir
  objeler ise tanımlanmış olan bu ifadelerin çalışan halidir. Class'lar bilgisayarın hafızasında
  yani RAM'de yer kaplamaz. Ama objeler içinde RAM'de yer ayrılır.

  Bir fırın benzetmesi yapabiliriz: fırındaki ekemek kalıbı bir class ise 
  o kalıptan çıkan ekemekler obje'dir.

  JSON objeleri ile class objeleri arasındaki fark ve benzerlikler:

  - Benzerlikler:
  - Her ikiseide bir objedir. Fakat "new" keywordu kullanrak oluşturuduğumuz
    objenin bir ismi vardır , json objesini yoktur(anonim bir objedir).
   
  - Fark:
  - Json Objelerinde objenin type'ını yazabilirz. Ama Class objelerinde
    ayrıca tanımlamaya gerek kalmaz çünkü klass'In kendisi bir type'tır

  - Jsonobjleri arasında miras alama olmaz. Ama class'lar arasında yapılaiblir.  
*/

// Json Objesi
type ornekType = {
  id: number;
  name: string;
};
const ornek: ornekType = {
  id: 12312,
  name: 'telefon',
};

// Class Objesi
const yeni_telefon = new Old_Phone();

/*
 * "this" Kullanımı:
 * Bir class'ın birden fazla kopyası (obje) oluşturulabilir ve her objenin kendine
 * ait property ve methodları bulunur. Bu özellikler içerisinden objenin kendi kendine
 * erişebilmesi için this anahatr kelimesini kullanıyoruz.
 
 * Bu sayede bir methoddan objenin sahip olduğu diğer property ve methodlara erişebilir
 */

class Modal_Class {
  baslik: string = '';
  acilma_sayisi: number = 0;
  acik_mi: boolean = false;

  modali_ac(yeniBaslik: string) {
    this.baslik = yeniBaslik;
    this.acilma_sayisi = this.acilma_sayisi + 1;
    this.acik_mi = true;
  }

  modali_kapat() {
    this.baslik = '';
    this.acik_mi = false;
  }
}

const uyari_modal = new Modal_Class();

console.log('önce >>', uyari_modal);

uyari_modal.modali_ac('Bu bir uyarıdır');

console.log('açıkken >>', uyari_modal);

uyari_modal.modali_kapat();

console.log('sonra >>', uyari_modal);
