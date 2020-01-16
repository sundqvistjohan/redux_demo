import React, { Component } from 'react';
import ChangeMessageForm from "./ChangeMessageForm"
import DisplayMessage from "./DisplayMessage"

class App extends Component {

  render() {
    return (
      <>
        <DisplayMessage />
        <ChangeMessageForm />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

export default App