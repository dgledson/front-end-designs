import constants from '../actionTypes/collections';

const initialState = {
  loading: false,
  error: false,
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_COLLECTIONS_REQUEST:
      return { ...state, loading: true };
    case constants.GET_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.data, loading: false };
    case constants.GET_COLLECTIONS_FAIL:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
