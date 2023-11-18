import { render, screen, within } from '@testing-library/react';
import List from '.';
import { users } from './../../constants/constants';
import { expect } from 'vitest';

it('gönderilen dizideki her kullanıcı için ekrana tablo satırı basılır', () => {
  // 1) bileşene gelen propları tanımla ve bileşeni ekrana bas
  render(<List users={users} />);

  // 2) tablonun body kısmındaki bütün satırları al
  const body = screen.getByTestId('table-body');

  // belirli bir kapsayıcın içerisndeki elemanları seçme
  const rows = within(body).getAllByRole('row');

  //3) satırların sayısı kullanıcıların saysına eşit mi kontrol eder
  expect(rows).toHaveLength(users.length);
});

it('herbir kullanıcı için email/isim/yaş değerleri hücre içinde ekrana basılır', () => {
  render(<List users={users} />);

  // herbir kullanıcı için ekrandaki tablo hücrelerinde
  // isim mail yaş değerleri yazıyor mu?
  for (const user of users) {
    screen.getByRole('cell', { name: user.name });
    screen.getByRole('cell', { name: user.email });
    screen.getByRole('cell', { name: user.age });
  }
});
