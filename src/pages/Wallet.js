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
            Email
            { emailUser }
          </h3>
          <h3 data-testid="total-field"> 0 </h3>
          <h3 data-testid="header-currency-field"> BRL </h3>
        </header>
        <form>
          <label htmlFor="valor">
            Valor
            <input type="number" id="valor" />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input type="text" id="descricao" />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select id="moeda">
              <option id="moeda">BRL</option>
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento
            <select id="metodo">
              <option id="metodo">Dinheiro</option>
              <option id="metodo">Cartão de crédito</option>
              <option id="metodo">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag
            <select id="tag">
              <option id="tag">Alimentação</option>
              <option id="tag">Lazer</option>
              <option id="tag">Trabalho</option>
              <option id="tag">Transporte</option>
              <option id="tag">Saúde</option>
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
