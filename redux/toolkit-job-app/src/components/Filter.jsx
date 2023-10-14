import React from 'react';
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

  const handleChange = (e) => {
    dispatch(filterBySearch(e.target.value));
  };

  //TODO form elemanlarını sıfırla
  const handleReset = () => {
    dispatch(clearFilters());
  };

  return (
    <section className="filter-sec">
      <h2>Filtreleme Formu</h2>
      <form>
        <div>
          <label>Pozisyon</label>
          <input onChange={handleChange} type="search" />
        </div>
        {/* selectler */}
        <div>
          <label>Durum</label>
          <select
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
