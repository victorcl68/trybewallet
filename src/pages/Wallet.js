import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <>
        <header>
          <h3 data-testid="email-field">
            Email:
            { emailUser }
          </h3>
          <h3 data-testid="total-field"> 0 </h3>
          <h3 data-testid="header-currency-field"> BRL </h3>
        </header>
        <form>
          <label htmlFor="valor">
            Valor:
            <input type="number" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select>
              <option> </option>
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento:
            <select>
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
            <select>
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  emailUser: state.user.email,
});

Wallet.propTypes = {
  emailUser: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
