import { useRef } from 'react';
import {
  sortOptions,
  typeOptions,
  statusOptions,
} from '../constants';
import { useDispatch } from 'react-redux';
import {
  clearFilters,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
} from '../redux/jobSlice';

const Filter = () => {
  const dispatch = useDispatch();
  // jsx elemaın referansını alma
  const searchRef = useRef(null);
  const statusRef = useRef(null);
  const typeRef = useRef(null);
  const sortRef = useRef(null);

  const handleChange = (e) => {
    dispatch(filterBySearch(e.target.value));
  };

  //TODO form elemanlarını sıfırla
  const handleReset = () => {
    dispatch(clearFilters());
    searchRef.current.value = '';
    statusRef.current.value = 'Seçiniz';
    typeRef.current.value = 'Seçiniz';
    sortRef.current.value = 'Seçiniz';
  };

  return (
    <section className="filter-sec">
      <h2>Filtreleme Formu</h2>
      <form>
        <div>
          <label>Ara</label>
          <input
            ref={searchRef}
            onChange={handleChange}
            type="search"
          />
        </div>
        {/* selectler */}
        <div>
          <label>Durum</label>
          <select
            ref={statusRef}
            onChange={(e) => dispatch(filterByStatus(e.target.value))}
          >
            <option selected disabled>
              Seçiniz
            </option>
            {statusOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Tür</label>
          <select
            ref={typeRef}
            onChange={(e) => dispatch(filterByType(e.target.value))}
          >
            <option selected disabled>
              Seçiniz
            </option>
            {typeOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Sırala</label>
          <select
            ref={sortRef}
            onChange={(e) => dispatch(sortJobs(e.target.value))}
          >
            <option selected disabled>
              Seçiniz
            </option>
            {sortOptions.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>

        <div>
          <button onClick={handleReset} type="button" className="btn">
            Sıfırla
          </button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
