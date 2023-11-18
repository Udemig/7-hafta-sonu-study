import { useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import { users as userArr } from './constants/constants';

function App() {
  const [users, setUsers] = useState(userArr);

  // yeni kullanıcıyı state'e ekler
  const addUser = (user) => {
    setUsers(users.concat(user));
  };

  return (
    <div className="container my-5">
      <Form addUser={addUser} />

      <List users={users} />
    </div>
  );
}

export default App;
