import React, { useState, useCallback } from 'react';
import Button from './cache/Button';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [name, setName] = useState('');

  // fonksiyonu cache'leme (hafızada tutma)
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <p>{name}</p>
      <Button handleClick={handleClick} />
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default App;
