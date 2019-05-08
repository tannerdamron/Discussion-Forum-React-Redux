const addPostReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const { id, name, body, upVotes, downVotes, votes, timeStamp } = action;
      let newState = Object.assign({}, state, {
        [id]: {
        id,
        name,
        body,
        upVotes,
        downVotes,
        votes,
        timeStamp,
        }
      });
      return newState;
    case 'UPVOTE_POST':
    console.log(state[Object.keys(state)[0]].upVotes);
      state[Object.keys(state)[0]].upVotes = state[Object.keys(state)[0]].upVotes + 1;
    default:
      return state;
  }
};

export default addPostReducer;
