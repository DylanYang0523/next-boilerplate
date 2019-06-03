const initState = {
  isFetching: false,
  data: [],
};

const comment = (state = initState, action) => {
  switch (action.type) {
    case 'GET_COMMENT_START':
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
      });
    case 'GET_COMMENT_SUCCESS':
      return Object.assign({}, state, {
        data: action.payload.data,
      });
    case 'GET_COMMENT_END':
      return Object.assign({}, state, {
        isFetching: action.payload.isFetching,
      });
    default:
      return state;
  }
};

export default comment;