import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props) {
  const {
    name,
    body,
    timeStamp,
    upVotes,
    downVotes,
    votes,
    id,
  } = props;

  function handleUpvotes() {
    const { dispatch } = props;
    const action = {
      type: 'UPVOTE_POST',
      id,
    };
    dispatch(action);
  }
  return (
    <div>
      <h3>{name}</h3>
      <p>{body}</p>
      <p>{timeStamp}</p>
      <p>{`Upvotes: ${upVotes}, Downvotes: ${downVotes}`}</p>
      <p>{`Votes: ${votes}`}</p>
      <button type="button" onClick={handleUpvotes}>&#x2B06;</button>
      <button type="button">&#x2B07;</button>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  upVotes: PropTypes.number.isRequired,
  downVotes: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
};

const mapStateToProps = upvotePost => ({ upvotePost: upvotePost });

export default connect(mapStateToProps)(Post);
