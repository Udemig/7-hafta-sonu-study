// Kulanının yetkisi varsa alt route'lara erişme izin ver

import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { Navigate, Outlet } from 'react-router-dom';

// Yoksa logim sayfasına yönlendir
const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    // kullanıcı oturumu her değiştiğinde çalışır
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  // kullanıcın yetkiis yoksa logine yönlendir
  if (isAuth === false) {
    return <Navigate to={'/'} replace />;
  }

  // yetkisi varsa alt route'u göster
  return <Outlet />;
};

export default ProtectedRoute;
