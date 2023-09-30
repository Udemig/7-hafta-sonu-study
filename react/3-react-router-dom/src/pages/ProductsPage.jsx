import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Card from '../components/Card';
import { useSearchParams } from 'react-router-dom';
import Filter from '../components/Filter';

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  // useSearch params iki değer döndürür
  // 1- url'de ekli olan arama paramtrelleri
  // 2- parametrelier değiştirmeye yarayan fonksiyon
  const [searchParams, setSearchParams] = useSearchParams();

  //  urldeki'arama paramtresine erişme
  const order = searchParams.get('sırala');
  const query = searchParams.get('aramaTerimi');

  // api'ye istek atarken istediğimiz
  // sıralamıyı belirten ayarlar
  const options = {
    params: {
      _sort: 'title',
      _order: order === 'z-a' ? 'desc' : 'asc',
      q: query,
    },
  };

  // bileşen ekrana baısldığı anda ve sıralama
  // değiştiğinde kitap verileri için istek at
  useEffect(() => {
    axios
      .get('http://localhost:3070/books', options)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);

  return (
    <div>
      {/* api'dan henüz cevap gelmemişse */}
      {!books && <Loading />}

      {/* api'den cevap gelince */}
      <h3 className="mx-5 mt-3">{books?.length} kitap bulundu</h3>

      <Filter />

      <div className="card-container">
        {books?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
