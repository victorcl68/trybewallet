import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <form>
          <h1>Trybe Wallet</h1>
          <label htmlFor="email-input-id">
            E-mail
            <input
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              // RegEx retirado desse site: https://wbruno.com.br/html/validando-formularios-apenas-com-html5/
              placeholder="Coloque seu email aqui!"
              data-testid="email-input"
              id="email-input-id"
              required
            />
          </label>
          <label htmlFor="password-input-id">
            Senha
            <input
              type="password"
              placeholder="Insira sua senha aqui!"
              minLength="6"
              data-testid="password-input"
              id="password-input-id"
              required
            />
          </label>
          <button type="submit">
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

export default Login;
