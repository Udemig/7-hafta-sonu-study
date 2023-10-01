// state'de tuttuğumuz verilerin ilk değeri
export const initialState = {
  todos: [],
  isDarkMode: true,
};

// gönderilen aksiyonun type değerine göre
// state'nasıl değişeceğine karar verir
export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // aksiyonun payload'ıyla gelen todoyu diziye ekleme
      const newTodos = [...state.todos, action.payload];
      // state'i güncelleme
      return { ...state, todos: newTodos };

    case 'DELETE_TODO':
      const filtred = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, todos: filtred };

    case 'CLEAR':
      return { ...state, todos: [] };

    default:
      return state;
  }
};
