import { useState } from 'react';
import { useReducer } from 'react';

// state'in nasıl değieceğine karar veren fonksiyon
// Aldığı parametreler
// >> state'emir geldiği andaki hali
// >> state'in nasıl değiceğini tanımlayan bir obje (action)
// !reducer'dan return edilen veri state'e aktarılır
const reducer = (state, action) => {
  if (action.type === 'ARTTIR') {
    return { count: state.count + 1 };
  }

  if (action.type === 'AZALT') {
    return { count: state.count - 1 };
  }
};

// tuttuğumuz verilerin ilk değeri
const initialState = {
  count: 0,
};

const Counter = () => {
  /*
    ! > useReducer: 
    * state yönetimiinin useState ile birlikte
    * yöntemesi zor olduğu durumlarda kullanılan hook
    ? bizden iki paramtre ister
    > > reducer: state'in nasıl değiceğine karar veren fonksiyon
    > > initialState: tuttucağımız verilerin ilk değeri
    ? bize dödrüdüğü değerler
    > > state'in güncel hali
    > > state değiştirmek için verdiğimiz emirleri reducer'a aktaran bir fonksiyon
    */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="counter">
      <button
        onClick={() =>
          // butona tıklanılınca reducer'a azlat emri gönderilir
          dispatch({
            type: 'AZALT',
          })
        }
      >
        Azalt
      </button>
      <span>{state.count}</span>
      <button
        onClick={() =>
          // butona tıklanılınca reducer'a arttır emri gönderilir
          dispatch({
            type: 'ARTTIR',
          })
        }
      >
        Arttır
      </button>
    </div>
  );
};

export default Counter;
