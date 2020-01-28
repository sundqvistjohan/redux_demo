import React, { Component } from 'react';
import ChangeMessageForm from "./ChangeMessageForm"
import DisplayMessage from "./DisplayMessage"
import { connect } from "react-redux"
import { withTranslation } from "react-i18next"

class App extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.dispatch({type: 'SET_GEOLOCATION' , payload: position.coords})
    })
  }

  changeLanguage = event => {
    this.props.i18n.changeLanguage(event.target.name)
  }
  
  render() {
    return (
      <>
        {this.props.coords &&
        <>
        <h1>{this.props.t('messages.latMessage')}: {this.props.coords.latitude}</h1>
        <h1>{this.props.t('messages.longMessage')}: {this.props.coords.longitude}</h1>
        <button name="sv" onClick={this.changeLanguage.bind(this)}>Svenska</button>
        <button name="en" onClick={this.changeLanguage.bind(this)}>English</button>

          Use useTranslation instead of withTranslation???
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
const ConnApp = connect(mapStateToProps)(App)

export default withTranslation()(ConnApp)