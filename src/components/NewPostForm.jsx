import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function NewPostForm(props) {
  let name = null;
  let body = null;

  function handleAddingPost(e) {
    e.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_POST',
      id: v4(),
      name: name.value,
      body: body.value,
      upVotes: 0,
      downVotes: 0,
      votes: 0,
      timeStamp: new Date().toString().substr(0, 25),
    };
    dispatch(action);
    name.value = '';
    body.value = '';
  }
  return (
    <div>
      <div>
        <form onSubmit={handleAddingPost}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            ref={(input) => { name = input; }}
          />
          <textarea
            id="issue"
            placeholder="Post"
            ref={(textarea) => { body = textarea; }}
          />
          <button type="submit">Post!</button>
        </form>
      </div>
    </div>
  );
}

export default connect()(NewPostForm);
