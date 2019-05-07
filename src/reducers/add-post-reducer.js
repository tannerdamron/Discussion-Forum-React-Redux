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
    default:
      return state;
  }
};

export default addPostReducer;
