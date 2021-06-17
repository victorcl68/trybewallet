import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actionLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
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
    const { email, isButtonDisabled } = this.state;
    const { sendEmail } = this.props;
    return (
      <main>
        <h1>Trybe Wallet</h1>
        <label htmlFor="email-input-id">
          E-mail
          <input
            type="email"
            name="email"
            placeholder="Coloque seu email aqui!"
            data-testid="email-input"
            id="email-input-id"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input-id">
          Senha
          <input
            type="password"
            minLength="6"
            placeholder="Insira sua senha aqui!"
            data-testid="password-input"
            id="password-input-id"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ isButtonDisabled }
            onClick={ () => sendEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </main>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendEmail: (state) => dispatch(actionLogin(state)),
});

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
