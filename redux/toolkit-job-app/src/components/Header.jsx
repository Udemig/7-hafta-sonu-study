import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2>
        <img
          height={50}
          src="https://cdn.freebiesupply.com/logos/large/2x/job-logo-png-transparent.png"
        />
        <span>İş Takip</span>
      </h2>
      <nav>
        <NavLink to={'/'}>İş Listesi</NavLink>
        <NavLink to={'/add-job'}>İş Ekle</NavLink>
      </nav>
    </header>
  );
};

export default Header;
