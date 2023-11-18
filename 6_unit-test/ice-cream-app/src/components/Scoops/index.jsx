import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './../Card';
const Scoops = () => {
  const [scoopsData, setScoopsData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3038/scoops')
      .then((response) => setScoopsData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Dondurma Çeşitleri</h1>
      <p>Tanesi 20&#8378;</p>
      <h2 data-testid="toplam">
        Çeşitler Ücreti: {basket.length * 20} &#8378;
      </h2>

      <div className="row gap-5 justify-content-between">
        {scoopsData?.map((scoop, index) => (
          <Card
            key={index}
            basket={basket}
            setBasket={setBasket}
            scoop={scoop}
          />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
