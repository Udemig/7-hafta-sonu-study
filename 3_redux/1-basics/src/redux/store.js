/*
 ! store oluşrma
 * 1. redux kütüphanesinden createStore methodu import edilir
 * 2. store içinde tutulan veriler kategorize edilir ve herbiri için reducer oluşutuşturulur
 * 3. oluşutulan reducerlar combineReducers methodu ile birleştirilir
 * 4. store'a, oluştulan birleşmiş reducer tanıtılır
 * 5. oluştutulan store projeye tanıtılır
 */
import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
import categoryReducer from './reducers/categoryReducer';

// birden fazla reducer varsa birleştirme
const rootReducer = combineReducers({
  todoReducer,
  categoryReducer,
});

// projeye tanıtmak için export etme
export default createStore(rootReducer);
