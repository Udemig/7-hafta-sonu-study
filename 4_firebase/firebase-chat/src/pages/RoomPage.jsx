import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/config';

const RoomPage = ({ setIsAuth, setRoom }) => {
  // * kullanıcın oturumunu sonlandırma
  const handleLogout = () => {
    // firebase ile açtığımı oturumu sonlandırma
    signOut(auth).then(() => {
      // lokalden kaldırma
      localStorage.removeItem('token');
      // login sayfasına yölendirmeyi  tetikler
      setIsAuth(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // oda ismini küçük harfe çevirme
    const roomName = e.target[0].value.toLowerCase();
    // state i güncelleme
    setRoom(roomName);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Giriceksiniz</p>

      <input type="text" placeholder="örn:haftasonu" />
      <button type="submit">Odaya Gir</button>
      <button type="button" onClick={handleLogout}>
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
