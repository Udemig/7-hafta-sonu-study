import Scoops from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('API ', async () => {
  render(<Scoops />);

  const images = await screen.findAllByRole('img');
  expect(images).toHaveLength(4);
});

test('Çeşit ekleme işleminin toplam fiyata yansıması', async () => {
  render(<Scoops />);

  const user = userEvent.setup();

  const total = screen.getByTestId('toplam');

  const buttons = await screen.findAllByRole('button', {
    name: 'Ekle',
  });
  const deleteButtons = await screen.findAllByRole('button', {
    name: 'Sıfırla',
  });

  await user.click(buttons[0]);
  expect(total).toHaveTextContent('20');

  await user.dblClick(buttons[1]);
  expect(total).toHaveTextContent('60');

  await user.click(deleteButtons[0]);
  expect(total).toHaveTextContent('40');

  await user.click(deleteButtons[2]);
  expect(total).toHaveTextContent('40');
  await user.click(deleteButtons[1]);
  expect(total).toHaveTextContent('0');
});
