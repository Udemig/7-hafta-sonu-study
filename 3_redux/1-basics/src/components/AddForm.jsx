import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addTodo } from '../redux/actions/todoActions';
import axios from 'axios';

const AddForm = () => {
  // dispatch kurulum
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // bir todo objesi oluşturma
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date(),
    };

    axios
      .post('/todos', newTodo)
      .then(() => {
        // reducer'a ekleme işlemi için haber verilim
        dispatch(addTodo(newTodo));
      })
      .catch(() => alert('ekleme işlemi başarısız oldu'));
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2">
      <input className="form-control" type="text" />
      <button className="btn btn-lg btn-outline-light">Ekle</button>
    </form>
  );
};

export default AddForm;
