import axios from 'axios';

// axios'un yapıcağı isteklerde temel url'i belirleme
axios.defaults.baseURL = 'http://localhost:3000';

const ListItem = ({ todo, allTodos, setTodos }) => {
  // elemanı hem api'dan hem ekran siler
  const handleDelete = () => {
    // api'dan veriyi silme
    axios
      .delete(`/todos/${todo.id}`)
      // api'dan silinirse arayüzü güncelle(state'den silme)
      .then(() => {
        const filtred = allTodos.filter((i) => i.id !== todo.id);
        setTodos(filtred);
      })
      // hata olursa kullanıcya bildirme
      .catch((err) => alert('Veriyi bir hata oluştu..'));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex gap-1">
        <input className="form-check-input" type="checkbox" />
        <span>{todo.isDone ? 'Tamamlandı' : 'Devam Ediyor'}</span>
      </div>

      <span>{todo.title}</span>

      <div className="d-flex align-items-center gap-1">
        <button>Düzenle</button>
        <button className="bg-danger" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </li>
  );
};

export default ListItem;
