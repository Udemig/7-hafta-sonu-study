import { render, screen } from '@testing-library/react';
import Form from '.';
import user from '@testing-library/user-event';
import { expect } from 'vitest';

// Form bileşeninde diğer bileşnlerden farklı bir test yapıcaz
// form gönderlince tabloya ekleniyort mu kontolü
// yapamayız (çünlü tablo list bileşenide)
// form gönderlinc state güncelleniyr mu kontorl yapamayız (app bileşenide)
//! form görevini doğru şekilde yerine getiriyor mu?
// bütün inputları doldurduktan sornra
// formu gönderince "addUser" fonksiyonu çalışıyor mu?
// "add" use fonksiyonuna doğru parametreyi gönderiyor muyuz?

it('form gönderilince "addUser" doğru parametreleri alarak çalışıyor mu?', async () => {
  // mock > fonksiyonları taklit etme
  // asıl fonksiyonun işlevini yapmaz sadece alttaki testleri yapmak için kullanılır
  // ne zaman çağrıldı | kaç kere çağrıldı | hangi parametrelerle çağrıldı
  // tarzında testleri yapmamızı sağlayan orj. fonksiyonu simüle eden yapı
  const mock = vi.fn();
  user.setup();

  render(<Form addUser={mock} />);

  // gerekli elemaları çağırma
  const nameInp = screen.getByLabelText('İsim');
  const mailInp = screen.getByLabelText('Email');
  const ageInp = screen.getByLabelText('Yaş');
  const button = screen.getByRole('button');

  // name inputuna doldurma - yol 1
  await user.type(nameInp, 'bilal');

  // mail inputunu doldurma - yol 2
  await user.type(mailInp, 'bilal@gmail.com');

  // yaş inputunu doldurma
  await user.type(ageInp, '28');

  // formu gönder
  await user.click(button);

  // form gönderlince addUser fonksiyonu çalışır
  expect(mock).toBeCalled();

  // fonk. çağrılırken doğru argümanlarla çağrılıyor mu?
  expect(mock).toBeCalledWith({
    name: 'bilal',
    email: 'bilal@gmail.com',
    age: '28',
  });
});
