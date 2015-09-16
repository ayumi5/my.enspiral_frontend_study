import React, {Component, PropTypes} from 'react';

export class UserSession extends Component {
  render(){
    return (
      <div id='login'>
        <h1>Login</h1>
        <table>
          <tr>
            <td>
              <label for='user_email'>Email</label>
            </td>
            <td>
              <input id='user_email' name='user[email]' size='30' tabindex='1' type='text'/>
            </td>
          </tr>
          <tr>
            <td>
              <label for='user_password'>Password</label>
            </td>
            <td>
              <input id='user_password' name='user[password]' size='30' tabindex='2' type='password'/>
            </td>
          </tr>
          <tr>
            <td colspan='2'>
              <label for='user_remember_me'>Remember me</label>
              <input name='user[remember_me]' type='hidden' value='0'/>
              <input id='user_remember_me' name='user[remember_me]' tabindex='3' type='checkbox' value='1' />
            </td>
          </tr>
        </table>
        <br/>
        <p>
          <input class='button medium' name='commit' tabindex='4'type='submit' value='Log in' />
        </p>
        <a>Forgot your password?</a>
      </div>
    )
  }
}
