import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="email-input-id">
          E-mail
          <input type="email" data-testid="email-input" id="email-input-id" />
        </label>
        <label htmlFor="password-input-id">
          Senha
          <input type="password" data-testid="password-input" id="password-input-id" />
        </label>
        <button type="button">
          Entrar
        </button>
      </>
    );
  }
}

export default Login;
