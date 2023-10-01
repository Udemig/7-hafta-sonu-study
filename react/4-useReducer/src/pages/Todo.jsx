import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducers';

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // yeni todo objesi oluşturma
    const newTodo = {
      id: new Date().getTime(),
      title: e.target[0].value,
    };

    // reducer'a emir verme
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Gönder</button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: 'CLEAR',
            })
          }
        >
          Sıfırla
        </button>
      </form>

      <ul>
        {state.todos.map((todo) => (
          <li>
            <span>{todo.title}</span>
            <button
              onClick={() =>
                dispatch({
                  type: 'DELETE_TODO',
                  payload: todo.id,
                })
              }
            >
              Sİl
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
