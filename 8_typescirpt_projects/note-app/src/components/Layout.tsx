// Bu layput bileşeni sayesinde urlde alınan id
// ile eşeleşen note'un bilegilerini bulucaz
// ve bubu bilgileri bütün alt route'lara aktarıcaz

import { Navigate, Outlet, useParams } from 'react-router-dom';
import { Note } from '../types';

type LayoutProps = {
  notes: Note[];
};

const Layout = ({ notes }: LayoutProps) => {
  // 1) urlden id'yi al
  const { id } = useParams();

  // 2) urlden alınan id ile eşeleşen note'u bul
  const found = notes.find((n) => n.id === id);

  // 3) note bulunmadıysa kullanıcıyı anasayfaya yönlendir
  if (!found) return <Navigate to={'/'} />;

  // 4) note bulunduysa bulunan note'u alt route'a aktar
  return <Outlet context={found} />;
};

export default Layout;
