const initialState = {
  category: [],
  isEmpty: true,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return '';

    case 'DELETE_CATEGORY':
      return '';

    default:
      return state;
  }
};

export default categoryReducer;
