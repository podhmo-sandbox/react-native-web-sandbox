'use strict';

import React, {Component} from '@/react';
import ReactDOM from '@/react-dom';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.push = this.push.bind(this);
  }

  push() {
    this.setState({liked: true});
  }

  render() {

    if (this.state.liked) {
      return (
        <p>You liked this.</p>
      );
    }

    return (
      <button onClick={this.push}>Like</button>
    );
  }
}


ReactDOM.render(
  <LikeButton/>,
  document.querySelector("#like_button_container")
);

