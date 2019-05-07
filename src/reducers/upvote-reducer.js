const upvotePostReducer = (state = 0, action) => {
  switch (action.type) {
  case 'UPVOTE_POST':
    return state + 1;
  default:
    return state;
  }
};

export default upvotePostReducer;
