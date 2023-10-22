import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import RoomPage from './pages/RoomPage';
import Chat from './pages/Chat';

function App() {
  // kulanıcnın yetkisi var mı state'i tutuyoruz
  // state'in ilk değerini localestroage'dan alıcaz
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const [room, setRoom] = useState(null);

  // yetkisi yoksa > giriş
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  // yetkisi varsa >
  return (
    <div className="container">
      {room ? (
        // oda belirlendiyse > sohbet ekranı
        <Chat room={room} setRoom={setRoom} />
      ) : (
        // oda belirlenmediyse > oda seçme
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
}

export default App;
