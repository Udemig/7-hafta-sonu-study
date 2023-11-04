import { useSelector } from 'react-redux';
import TodoCard from './TodoCard';

const ListTodos = () => {
  // store'a abone olma
  const state = useSelector((store) => store.todoReducer);

  return (
    <div>
      {state.isEmpty ? (
        <h5 className="text-center mt-5">
          Herhangi bir yapılacak eklenmedi
        </h5>
      ) : (
        state.todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default ListTodos;
