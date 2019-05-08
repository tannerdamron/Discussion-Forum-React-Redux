import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

function PostList(props) {
  const { postList } = props;
  return (
    <div>
      <hr />
      {Object.keys(postList).map(function(postId) {
        const post = postList[postId];
        return <Post
          id={post.id}
          name={post.name}
          body={post.body}
          upVotes={post.upVotes}
          downVotes={post.downVotes}
          votes={post.votes}
          timeStamp={post.timeStamp}
          key={post.id}
        />
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    postList: state.postList,
  };
};

export default connect(mapStateToProps)(PostList);
