/*
 * Tuple:
 * Uzunlupu sabit ve elemalnlarının sırası / tipi bbelirli olan
 * Dizilein tipini tanımlamak için kullanılan yapıdır.
 *
 * Bir dizi içerisine type'ları sırlarız
 * Örn: [number,string,string,object]
 */

import { useState } from 'react';

const colors: [number, number, string, string] = [
  100,
  5,
  '#564',
  '#670',
];

// gerçek projede kullanım seneryosu:
// const [value,setValue] = useState()

// farklı örnek
// rgb(123,67,23)
// rgba(123,67,23,0.9)
let color: [number, number, number, number?];

color = [45, 78, 23];

color = [56, 12, 89, 0.4];
