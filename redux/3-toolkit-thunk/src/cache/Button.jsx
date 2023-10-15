import React, { memo } from 'react';

const Button = ({ handleClick }) => {
  console.log('ekana basıldı');
  return <button onClick={handleClick}>Arttır</button>;
};

// bileşeni hafızada tutar
export default React.memo(Button);
