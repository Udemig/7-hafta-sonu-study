import { useLocation } from 'react-router-dom';

const UndefinedPage = () => {
  // sayfa hakkında bilgileri içeriri
  // aynı zamanda farklı sayfalardan aktarılan
  // bir veri varsa erişimi sağlar
  const { state } = useLocation();

  return (
    <div style={{ height: '80vh' }} className="container py-5">
      <img
        className="img-fluid rounded"
        src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/08_404.gif"
      />

      <p className="text-center fs-3 my-5">
        Üzgünüz , aradığınız sayfa bulunamadı
      </p>

      {/* hata kodu gönderildiyse ekrana basar */}
      {state && (
        <p className="fs-3 text-center">
          Hata Kodunuz{' '}
          <span className="badge bg-warning">{state}</span>
        </p>
      )}
    </div>
  );
};

export default UndefinedPage;
