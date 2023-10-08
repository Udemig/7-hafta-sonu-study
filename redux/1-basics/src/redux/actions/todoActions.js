import { ActionTypes } from '../actionTypes/todoTypes';

// payload'I olamayn bir aksiyon tanmımlama
const ADD_COUNT = {
  type: 'ADD_COUNT',
};

// payload değerine sahip bir askiyon tanımlarken
// payload değeri değişken olduğundan dolayı
// aksiyon oluşturan bir fonksiyon yazarız ve payload
// değeirni parametre olarak alırız

//* aksiyon oluştuan fonksiyonlar
export const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: ActionTypes.DELETE_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: ActionTypes.UPDATE_TODO,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET_TODOS,
  payload,
});
