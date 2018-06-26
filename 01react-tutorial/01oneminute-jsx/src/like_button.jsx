'use strict';

import React, {Component} from '@/react';
import ReactDOM from '@/react-dom';

class LikeButton extends Component {
  state = { liked: false };

  push = () => {
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

