import React from 'react'
import { connect } from 'react-redux'

const DisplayMessage= (props) => {
  
  return (
    <div id="lol">
      <h1>{props.message}</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(DisplayMessage)
