export const getCommentStart = () => ({
  type: 'GET_COMMENT_START',
  payload: {
    isFetching: true,
  },
});

export const getCommentSuccess = data => ({
  type: 'GET_COMMENT_SUCCESS',
  payload: {
    data,
  },
});

export const getCommentEnd = () => ({
  type: 'GET_COMMENT_END',
  payload: {
    isFetching: false,
  },
});