/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import NewPostForm from './NewPostForm';
import PostList from './PostList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>Post The Most</h1>
        <NewPostForm />
        <PostList />
      </div>
    );
  }
}

export default (connect()(App));
