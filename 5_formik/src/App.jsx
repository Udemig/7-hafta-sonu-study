import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './views/Auth';
import HomeController from './controllers/HomeController';
import DetailController from './controllers/DetailController';
import HeaderView from './views/HeaderView';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.coincap.io/v2';

function App() {
  return (
    <BrowserRouter>
      <HeaderView />

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomeController />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
