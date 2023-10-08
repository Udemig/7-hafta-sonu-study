/*
 ! reducer
 * store'un nasıl değişiceğine karar verir
 * reducer normal bir fonksiyondur
 * Ve iki aprametre alamsı gerekir
 * > state: store'da tutulan verinin son durumu
 * > action: store'un nasıl etkilenmesi gerektiğini belirten bir obje
 * reducer'da return edilen veri store'un güncel hali olur
*/

import { ActionTypes } from '../actionTypes/todoTypes';

const initialState = {
  todos: [], // todo'lar başlangıçta boş bir dizi olucak
  isEmpty: true, // todo'lar boş mu değeri
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const clone = [...state.todos];

      //  payload'ı state'deki todolar dizisine ekleriz
      clone.unshift(action.payload);

      // store'u güncelleme
      return { ...state, todos: clone, isEmpty: false };

    case ActionTypes.DELETE_TODO:
      // payload ile gelen id'yi diziden çıkarm
      const filtred = state.todos.filter(
        (i) => i.id !== action.payload
      );
      // boş mu hesaplama
      const isEmpty = filtred.length === 0;

      return { ...state, todos: filtred, isEmpty: isEmpty };

    case ActionTypes.UPDATE_TODO:
      // diziyi güncelleme
      // eski elemanı çııkarıp yerine payload ile
      // ile gelen yeni versiyonu diziye ekleme
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return { ...state, todos: updated };

    case ActionTypes.SET_TODOS:
      const is_empty = action.payload.length === 0;

      return { ...state, todos: action.payload, isEmpty: is_empty };

    default:
      return state;
  }
};

export default todoReducer;
