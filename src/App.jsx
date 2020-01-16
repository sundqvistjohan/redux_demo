import React, { Component } from 'react';

class App extends Component {
  state = {
    message: 'Hello world from component state'
  }
  render() {
    return (
      <>
        {this.state.message}
      </>
    );
  }
}

export default App;