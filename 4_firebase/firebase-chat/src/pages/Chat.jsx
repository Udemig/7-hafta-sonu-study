import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { useEffect, useState } from 'react';
import Message from '../components/Message';

const Chat = ({ room, setRoom }) => {
  const [messages, setMessages] = useState(null);

  // kolleksiyonun refeeransını al
  const messagesRef = collection(db, 'messages');

  // mesaj gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target[0].value;

    // veritabının yeni document ekler
    await addDoc(messagesRef, {
      text,
      room,
      author: {
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(), // sunucunun zamanını alır
    });

    // formu temizle
    e.target[0].value = '';
  };

  // kolleksiyondaki değişmi canlı olarak izleme
  useEffect(() => {
    // filtreleme ayarları tanımala
    const options = query(
      messagesRef,
      where('room', '==', room),
      orderBy('createdAt', 'asc')
    );
    // koleksiyon her değiştiğinde
    // bir fonk. çalıştırıp fonk.na güncel
    // dökümanları parametre oalrak gönderiri
    const unsubscribe = onSnapshot(options, (snapshot) => {
      // mesajları state'den önce geçici olarak tuttuğumuz dizi
      const tempData = [];

      // doc'ların verilerine erişip yeni diziye gönderiyoruz
      snapshot.docs.forEach((doc) => tempData.push(doc.data()));

      // state'i güncelle
      setMessages(tempData);
    });

    // bileşen ayrılırsam izlyici iptal edilir
    return () => unsubscribe();
  }, []);

  return (
    <div className="chat">
      <header>
        <p>{auth?.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>
      <main>
        {messages?.map((data, i) => (
          <Message key={i} data={data} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="mesajınızı yazınız..."
        />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
