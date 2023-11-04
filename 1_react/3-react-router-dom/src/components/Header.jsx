import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 fs-3">
          <Link to={'/'}>Kitap Kurdu</Link>
        </span>

        <div className="d-flex gap-2">
          {/*
           * link'ten farklı olarak kullanıcnın
           * bulunduğu sayfa link'in to'su ile eşleşirse
           * o linke active class'ı ekler
           */}
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/ürünler">Ürünler</NavLink>
          <NavLink to="/kategori">Kategoriler</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
