const initState = {
  subtitle: 'Omg, default subtitle.',
};

const video = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SUBTITLE':
      return Object.assign({}, state, {
        subtitle: action.payload.subtitle,
      });
    default:
      return state;
  }
};

export default video;