// action'ların type'ını tanımlarken ve reducer'lar
// da bu type ları kullanırken dalgınlaktan kaynaklı oluşabilecek
// hataları önlemek için projede aksiyon tiplerini ayrı
// bir dosyada tutuyoruz

export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  SET_TODOS: 'SET_TODOS',
};
