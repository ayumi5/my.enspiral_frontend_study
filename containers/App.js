import React, {Component, PropTypes} from 'react';
import { UserSession } from '../components/UserSession';
import { connect } from 'react-redux';
import { userLogin } from '../actions/userSession';

export default class App extends Component {
  render(){
    return (
      <div>
        <UserSession />
      </div>
    )
  }
}

function select(state){
  return {
    user: state.user
  };
}

export default connect(select)(App);
