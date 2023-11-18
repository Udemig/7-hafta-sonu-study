import { Link, NavLink } from 'react-router-dom';

const HeaderView = () => {
  return (
    <header className="d-flex justify-content-between p-3 align-items-center">
      <Link className="d-flex gap-3 align-items-center">
        <img height={40} src="/c-logo.png" alt="logo" />
        <h3 className="text-light">Coinmania</h3>
      </Link>

      <div className="d-flex gap-3">
        {localStorage.getItem('user') ? (
          <NavLink
            to={'/'}
            onClick={() => localStorage.removeItem('user')}
          >
            Çıkış Yap
          </NavLink>
        ) : (
          <NavLink to={'/'}> Giriş Yap</NavLink>
        )}

        <NavLink to={'/home'}>Anasayfa</NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
