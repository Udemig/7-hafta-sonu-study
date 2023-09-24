import axios from 'axios';
import { useState } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

// axios'un yapıcağı isteklerde temel url'i belirleme
axios.defaults.baseURL = 'http://localhost:3000';

const ListItem = ({ todo, allTodos, setTodos }) => {
  const [isEditMode, setIsEditMode] = useState(false);

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

  // elemanı isDone değerini günceller
  const handleChange = () => {
    // isDone değerini tersine çevir
    const updated = { ...todo, isDone: !todo.isDone };

    // api'i güncelle
    axios
      .put(`/todos/${updated.id}`, updated)
      // state'i güncelle
      .then(() => {
        const newTodos = allTodos.map((i) =>
          i.id === updated.id ? updated : i
        );

        setTodos(newTodos);
      });
  };

  // elemanın başlığını günceller
  const handleEdit = (e) => {
    e.preventDefault();
    const newTitle = e.target[0].value;
    // todonun güncel objesini oluşturma
    const updated = { ...todo, title: newTitle };

    // api'i güncelleme
    axios
      .put(`/todos/${updated.id}`, updated)
      // api'i isteği başarılı olursa state'i güncelleme
      .then(() => {
        // güncel diziyi tanımlama
        const newTodos = allTodos.map((i) =>
          i.id === updated.id ? updated : i
        );
        // state'İ güncelemme
        setTodos(newTodos);
        // düzenleme modunu kapttık
        setIsEditMode(false);
      });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex gap-1">
        <input
          checked={todo.isDone}
          onChange={handleChange}
          className="form-check-input"
          type="checkbox"
        />
        <span>{todo.isDone ? 'Tamamlandı' : 'Devam Ediyor'}</span>
      </div>

      {isEditMode ? (
        <form onSubmit={handleEdit} className="d-flex gap-2">
          <input
            defaultValue={todo.title}
            className="rounded"
            type="text"
          />
          <button type="submit">
            <GiCheckMark />
          </button>
          <button type="button" onClick={() => setIsEditMode(false)}>
            <AiOutlineClose />
          </button>
        </form>
      ) : (
        <span>{todo.title}</span>
      )}

      {!isEditMode ? (
        <div className="d-flex align-items-center gap-1">
          <button
            disabled={isEditMode}
            onClick={() => setIsEditMode(true)}
          >
            Düzenle
          </button>

          <button className="bg-danger" onClick={handleDelete}>
            Sil
          </button>
        </div>
      ) : (
        <span></span>
      )}
    </li>
  );
};

export default ListItem;
