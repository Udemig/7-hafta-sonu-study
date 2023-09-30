import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ book }) => {
  return (
    <div className="card shadow rounded p-1">
      <img className=" rounded" src={book.image} />

      <div className="card-body">
        <h4>{book.title}</h4>
        <h5>{book.author}</h5>

        <Link
          to={`/ürün/${book.id}`}
          className="btn btn-primary w-100"
        >
          Detay Gör
        </Link>
      </div>
    </div>
  );
};

export default Card;
