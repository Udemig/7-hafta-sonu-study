import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Categories = () => {
  return (
    <div
      className="d-flex align-items-center gap-4 p-5"
      style={{ minHeight: '80vh' }}
    >
      {/* alt route'larda ortak olark yer lana başlık */}
      <aside className="bg-white p-5 rounded d-flex flex-column gap-5">
        <NavLink to={'/kategori/hikaye'}>Hikaye</NavLink>
        <NavLink to={'/kategori/roman'}>Roman</NavLink>
      </aside>

      {/*
       * Alt Route'ların kapsayı route içerisinde
       * hangi noktada ekrana basılacağını belirler
       */}
      <Outlet />
    </div>
  );
};

export default Categories;
