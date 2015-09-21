import React, { findDOMNode, Component, PropTypes} from 'react';

export class UserSession extends Component {
  render(){
    return (
      <div id='login'>
        <img alt="enspiral" src="../assets/images/logos/enspiral.png"/>
        <h1>Login</h1>
        <table>
          <tr>
            <td>
              <label htmlFor='user_email'>Email</label>
            </td>
            <td>
              <input id='user_email' name='user[email]' size='30' tabIndex='1' type='text' ref='email'/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor='user_password'>Password</label>
            </td>
            <td>
              <input id='user_password' name='user[password]' size='30' tabIndex='2' type='password' ref='password'/>
            </td>
          </tr>
          <tr>
            <td colSpan='2'>
              <label htmlFor='user_remember_me'>Remember me</label>
              <input name='user[remember_me]' type='hidden' value='0'/>
              <input id='user_remember_me' name='user[remember_me]' tabIndex='3' type='checkbox' value='1' />
            </td>
          </tr>
        </table>
        <br/>
        <p>
          <input className='button medium' name='commit' tabIndex='4' onClick={(e) => this.handleClick(e)} type='submit' value='Log in' />
        </p>
        <a>Forgot your password?</a>
      </div>
    )
  }
  handleClick(event) {
    const emailNode = findDOMNode(this.refs.email);
    const email = emailNode.value.trim();
    const passwordNode = findDOMNode(this.refs.password);
    const password = passwordNode.value.trim();
    this.props.onLoginClick({email: email, pasword: password});
    emailNode.value = '';
    passwordNode.value = '';
  }
}
