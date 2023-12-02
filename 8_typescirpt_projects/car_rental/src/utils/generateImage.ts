import { colors } from '../constants';
import { CarType } from '../types';

//* Bize parametre olarka gelen her bir araba için
//* arabanın fotoğrafının linkini oluşturucasz
//? temel url: https://cdn.imagin.studio/getimage
//* arabanın bilgilerine göre elde etmek istediğimiz:
//? TEMEL_URL?customer=hrjavascript-mastery&make=ford&modelFamily=focus

export const generateImage = (
  car: CarType,
  angle?: string
): string => {
  // url sınıfın özelliklerine erişebilmek için bir örnek oluştur
  // örnek oluşturuken temel url parametre olrak gönderiyoruz
  const url: URL = new URL('https://cdn.imagin.studio/getimage');

  // dinamiik bir şekilde url parametreler ekleme
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', car.make);
  url.searchParams.append(
    'modelFamily',
    car.model.split('/')[0].split(' ')[0]
  );
  url.searchParams.append('zoomType', 'fulscreen');

  if (angle) {
    url.searchParams.append('angle', angle);
  }

  // rastgele bir renk seç ve onu ekle
  const idx = Math.floor(Math.random() * colors.length);
  url.searchParams.append('paintId', colors[idx]);

  //   oluşturduğumuz resim url'in döndür
  return url.href;
};
