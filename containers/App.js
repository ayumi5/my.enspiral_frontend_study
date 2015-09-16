import React, {Component, PropTypes} from 'react';
import { UserSession } from '../components/UserSession';

export default class App extends Component {
  render(){
    return (
      <div>
        <UserSession />
      </div>
    )
  }
}
