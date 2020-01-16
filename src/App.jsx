import React, { Component } from 'react';

class App extends Component {
  state = {
    message: 'Hello world from component state'
  }
  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default App;