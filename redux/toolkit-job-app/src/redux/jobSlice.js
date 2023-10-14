import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainJobs: [],
  jobs: [],
  initialized: false, //veriler yüklendi mi?
  isError: false, // hata var mı?
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJob: (state, action) => {
      state.jobs = action.payload;
      state.mainJobs = action.payload;
      state.initialized = true;
      state.isError = false;
    },
    setError: (state) => {
      state.isError = true;
      state.initialized = true;
    },
    filterBySearch: (state, action) => {
      // arama terimin i küç karfe çevirme
      const query = action.payload.toLowerCase();
      // aram terimini içeren işleri fitlrememe
      const filter = state.mainJobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );
      // stat'i güncelleme
      state.jobs = filter;
    },
    filterByStatus: (state, action) => {
      const filtred = state.mainJobs.filter(
        (job) => job.status === action.payload
      );
      state.jobs = filtred;
    },

    filterByType: (state, action) => {
      const filtred = state.mainJobs.filter(
        (job) => job.type === action.payload
      );
      state.jobs = filtred;
    },

    sortJobs: (state, action) => {
      switch (action.payload) {
        case 'a-z':
          // mnetin idalerini a-z ye sıralama
          state.jobs.sort((a, b) =>
            a.company.localeCompare(b.company)
          );
          break;
        case 'z-a':
          // mnetin idalerini z-a ye sıralama
          state.jobs.sort((a, b) =>
            b.company.localeCompare(a.company)
          );
          break;
        case 'En Yeni':
          state.jobs.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          break;
        case 'En Eski':
          state.jobs.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
          break;
      }
    },
    clearFilters: (state) => {
      state.jobs = state.mainJobs;
    },
  },
});

// aksiyonları export etme
export const {
  setJob,
  setError,
  filterBySearch,
  filterByStatus,
  filterByType,

  sortJobs,
  clearFilters,
} = jobSlice.actions;

// createSlice ın oluşturdğu reducer'ı export etme
export default jobSlice.reducer;
