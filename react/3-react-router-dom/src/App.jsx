import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      {/*
       * taryıcaki url izler
       * url değiştiğinde tanımladığımız
       * route'lardan biri ile eşeleşirse
       * ekrana route'un bileşenini basar
       */}
      <Routes>
        {/* projedeki her sayfa için route tanımlanır */}
        {/* route'a yol ve o yol için ekran a basılacak beileşen verilir */}
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
