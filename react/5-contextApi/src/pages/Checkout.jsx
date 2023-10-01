import { useContext } from 'react';
import { BasketContext } from '../context/basketContext';

const Checkout = () => {
  const context = useContext(BasketContext);

  console.log(context);

  return (
    <div>
      {/* septte ürün yoksa */}
      {context.basket.length === 0 && (
        <h3 className="text-center my-5">
          Öncelikle sepete bir kaç ürün ekleyiniz
        </h3>
      )}

      {/* sepette ürün varsa */}
      {context.basket.length > 0 && <h3>Toplam</h3>}

      {context.basket?.map((i) => (
        <div className="d-flex justify-content-between align-items-center p-3 gap-3">
          <img
            className="object-fit-contain rounded"
            src={i.image}
            height={100}
          />
          <h4>{i.title.slice(0, 15) + '...'}</h4>
          <h3>${(i.price * i.amount).toFixed(2)}</h3>
          <p>miktar: {i.amount}</p>

          <div>
            <button onClick={() => context.addToBasket(i)}>+</button>
            <button onClick={() => context.removeFromBasket(i.id)}>
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
