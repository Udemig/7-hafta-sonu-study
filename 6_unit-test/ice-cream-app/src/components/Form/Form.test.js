/**
 * ilk olarak test edeceğim compoenentini dosyama import edilir
 * test küthanesinden ekrana basmak için ve diğer işelmerl için gerekli
 * metodlar alınır
 */

import Form from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/**test bizden 2 tane değer alır
 * neyin test edilğği
 * test fonksionudur
 */
test("Koşulların Onaylanmasına Göre Buton Aktifliği", async () => {
  /**Teste başlamadan önce
   * test edilecek compoennt render metodu ile arka planda ekrana basılır
   */

  //test edilecek compoenenti ekrana basma
  render(<Form />);

  //user türetme
  const user = userEvent.setup();

  //gerekli elemanları alma
  //Siparişi onayl butonu
  const orderButton = screen.getByRole("button");
  //Check box
  const checkBox = screen.getByRole("checkbox");
  //sipariş onayla butonu başlangıçta disable olacak
  expect(orderButton).toBeDisabled();
  //checkboxın başlangıçta tikli olmaması
  expect(checkBox).not.toBeChecked();
  //checkboxa tıklatma
  await user.click(checkBox);
  //cehckbox tıklı iken siparişi onayla butonun aktif olması durumu kontrolu
  expect(orderButton).toBeEnabled();
  //checkboxa 2. kez tıkla
  await user.click(checkBox);
  //siparişi onayla butonun pasi olacak
  expect(orderButton).toBeDisabled();
});

test("onayla butonu hover olunca bildirim çıkar", async () => {
  render(<Form />);
  const user = userEvent.setup();
  //check boxı çekme
  const checkBox = screen.getByRole("checkbox");
  //siparişi onayla butonu çekme
  const orderButton = screen.getByRole("button");
  //açılan popoup çekme
  const popup = screen.getByText("Size gerçekten birşey", { exact: false });
  //checkboxa tıklama
  await user.click(checkBox);
  //siparişi onayla btonun üstüne gelme
  fireEvent.mouseEnter(orderButton);
  //popup ekran görünür olması kontorlü
  expect(popup).toBeVisible();
  //mousun spiarşi onayla butonundan ayrılması
  fireEvent.mouseLeave(orderButton);
  //popun gürünür olMAMASI kontrolü
  expect(popup).not.toBeVisible();
});
