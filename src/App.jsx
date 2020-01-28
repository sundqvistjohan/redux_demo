import React, { Component } from 'react';
import ChangeMessageForm from "./ChangeMessageForm"
import DisplayMessage from "./DisplayMessage"
import { connect } from "react-redux"

class App extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.dispatch({type: 'SET_GEOLOCATION' , payload: position.coords})
    })
  }
  
  render() {
    return (
      <>
        {this.props.coords &&
        <>
        <h1>Latitude: {this.props.coords.latitude}</h1>
        <h1>Longitude: {this.props.coords.longitude}</h1>
        </>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    coords: state.coords
  }
}

export default connect(mapStateToProps)(App)