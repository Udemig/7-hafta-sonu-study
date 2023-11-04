import axios from 'axios';
import { useEffect, useState } from 'react';
import { options2 } from '../constants';
import Loader from './Loader';
import { useDispatch } from 'react-redux';
import { setRoute } from '../redux/slices/flightSlice';

const DetailModal = ({ closeModal, detailId }) => {
  const dispatch = useDispatch();
  const [d, setDetail] = useState(null);

  useEffect(() => {
    // eski verierli temizle > loadingi tetikler
    setDetail(null);
    //  uçuş detauları için istek at
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        options2
      )
      .then((res) => {
        setDetail(res.data);
        dispatch(setRoute(res.data.trail));
      });
  }, [detailId]);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close">
          <span onClick={closeModal}>X</span>
        </p>

        {!d ? (
          <Loader />
        ) : (
          <>
            <h2>{d.aircraft.model.text}</h2>
            <h2>{d.aircraft.model.code}</h2>
            <p>
              <span>Kuyruk No: </span>
              <span>{d.aircraft.registration}</span>
            </p>
            <img
              src={d.aircraft.images?.large[0]?.src}
              alt="plane-pic"
            />
            <p>
              <span> Kalkış: </span>
              <a target="_blank" href={d.airport.origin?.website}>
                {d.airport.origin?.name}
              </a>
            </p>
            <p>
              <span> Hedef: </span>
              <a
                target="_blank"
                href={d.airport.destination?.website}
              >
                {d.airport.destination?.name}
              </a>
            </p>
            <p>
              <span>Durum: </span>
              <span className={`status ${d.status.icon}`}>
                {d.status.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
