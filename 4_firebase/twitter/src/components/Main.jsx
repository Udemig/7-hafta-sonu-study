import { useEffect, useState } from 'react';
import Form from './Form';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';
import Loader from './Post/Loader';
import Post from './Post';

const Main = ({ user }) => {
  const tweetsCol = collection(db, 'tweets');
  const [tweets, setTweets] = useState(null);

  // atılan tweetler'i çekme
  useEffect(() => {
    onSnapshot(tweetsCol, (snapshot) => {
      const tempTweets = [];

      snapshot.forEach((doc) =>
        tempTweets.push({ id: doc.id, ...doc.data() })
      );

      setTweets(tempTweets);
    });
  }, []);

  return (
    <main className="border border-gray-700 overflow-y-auto">
      <header className="font-bold p-4 border-b-[1px] border-gray-700">
        Anasayfa
      </header>

      <Form user={user} />

      {!tweets ? (
        <Loader />
      ) : (
        tweets.map((tweet) => <Post key={tweet.id} tweet={tweet} />)
      )}
    </main>
  );
};

export default Main;
