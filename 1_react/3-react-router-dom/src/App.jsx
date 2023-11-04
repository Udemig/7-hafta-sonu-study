import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductsPage from './pages/ProductsPage';
import UndefinedPage from './pages/UndefinedPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import Categories from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      {/* ortak kullanılan bileşen */}
      <Header />

      {/*
       * tarayıcaki url izler  url değiştiğinde
       * tanımladığımız route'lardan biri ile eşeleşirse
       * ekrana route'un bileşenini basar
       */}
      <Routes>
        {/* projedeki her sayfa için route tanımlanır */}
        {/* route'a yol ve o yol için ekran a basılacak beileşen verilir */}
        <Route path="/" element={<MainPage />} />

        <Route path="/ürünler" element={<ProductsPage />} />

        {/* dinamik route > parametreye sahip */}
        <Route path="/ürün/:id" element={<ProductDetail />} />

        {/* nested route > iç içe yollar */}
        <Route path="/kategori" element={<Categories />}>
          {/* alt yollar */}
          <Route path="hikaye" element={<h1>Hikaye</h1>} />
          <Route path="roman" element={<h1>Roman</h1>} />
        </Route>

        {/* tanımsız bir url'e yönlenirse */}
        <Route path="*" element={<UndefinedPage />} />
      </Routes>

      {/* ortak kullanılan bileşen */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
