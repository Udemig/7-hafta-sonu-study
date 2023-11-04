import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const ProductDetail = () => {
  const [book, setBook] = useState(false);
  // useNavigate > kullanıcıyı yönlendirmeye yarar
  const navigate = useNavigate();

  // useParams > url'deki paramatreli alır
  const { id } = useParams();

  // url'den aldığım id'den yola çıkarak
  // api isteği ile kitabın detaylarına erişir
  // gerçek projelrde de detay sayflarının (youtube/amazon)
  // işleyiş şekli bu şekildedir
  useEffect(() => {
    axios
      .get(`http://localhost:3070/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        // fonksiyon içerisinde yönlendirme yapılacaksa
        // react-router-dom da useNavigate hooku kullanılır
        // state değişkeni yönlendiriimiz sayfaya veri aktarmaya yarar
        navigate('/undefined', { state: err.response.status });
      });
  }, [id]);

  return (
    <div>
      {!book ? (
        <Loading />
      ) : (
        <div className="row my-5 p-5" style={{ minHeight: '80vh' }}>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="rounded img-fluid shadow"
              style={{ maxHeight: '400px' }}
              src={book.image}
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>
            <div className="my-4">
              <BookInfo title={'Yazar'} value={book.author} />
              <BookInfo title={'Açıklama'} value={book.description} />
              <BookInfo title={'Yıl'} value={book.year} />
              <BookInfo title={'Sayfa Sayısı'} value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// kitap bilgisini ekran basr
const BookInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};

export default ProductDetail;
