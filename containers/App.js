import React, {Component, PropTypes} from 'react';
import { UserSession } from '../components/UserSession';
import { connect } from 'react-redux';
import { userLogin } from '../actions/userSession';

export default class App extends Component {
  render(){
    const { dispatch, user } = this.props;
    return (
      <div>
        <UserSession
          onLoginClick={ (user)=>
            dispatch(userLogin(user))
          }/>
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
