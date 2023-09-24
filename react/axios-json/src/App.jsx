import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './components/Loading';
import ListItem from './components/ListItem';

// axios'un yapıcağı isteklerde temel url'i belirleme
axios.defaults.baseURL = 'http://localhost:3000';

function App() {
  const [todos, setTodos] = useState(null);

  // bileşen ekrana basılınca
  useEffect(() => {
    // veritabaının verileri alma
    axios
      .get('http://localhost:3000/todos')
      .then((res) => setTodos(res.data));
  }, []);

  // fformun gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: e.target[0].value,
      date: new Date(),
      isDone: false,
    };

    // veritabanaına yeni eleman ekleme
    // göndermek isteğimiz url + gönderilecek veri
    axios
      .post('/todos', newTodo)
      .then(() => setTodos([...todos, newTodo]));

    // FETXH POST
    // fetch('http://localhost:3000/todos', {
    //   method: 'POST',
    //   body: JSON.stringify(newTodo),
    // });
  };

  return (
    <div className="container my-5">
      <h2>Yapılacaklar</h2>

      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center gap-3 my-5"
      >
        <input className="form-control shadow" type="text" />
        <button className="btn btn-primary shadow">Gönder</button>
      </form>

      <ul className="list-group">
        {/* api'dan cevap beklerken: */}
        {todos === null && <Loading />}

        {/* api'dan veri geldikten sonra: */}
        {todos?.map((todo) => (
          <ListItem
            todo={todo}
            allTodos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
