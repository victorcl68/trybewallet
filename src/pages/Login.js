import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import emailData from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.inputsCheck = this.inputsCheck.bind(this);

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value }, this.inputsCheck);
  }

  handleClick() {
    const { email } = this.state;
    const { sendEmail, history } = this.props;

    sendEmail({ email });

    history.push('/carteira');
  }

  inputsCheck() {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const checkEmail = regex;
    const { email, password } = this.state;
    const minLengthPassword = 6;

    const isValid = email.match(checkEmail) && password.length >= minLengthPassword;

    if (isValid) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

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
