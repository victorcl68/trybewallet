import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { sendCoin } = this.props;
    sendCoin();
  }

  render() {
    const { coins } = this.props;
    return (
      <>
        <Header />
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
            <select id="moeda">
              { coins.map((coinTypes) => (
                <option
                  value={ coinTypes }
                  key={ coinTypes }
                >
                  { coinTypes }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="metodo">
            Método de pagamento:
            <select id="metodo">
              <option id="metodo">Dinheiro</option>
              <option id="metodo">Cartão de crédito</option>
              <option id="metodo">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Tag:
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

const mapStateToProps = (state) => ({ coins: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({ sendCoin: () => dispatch(fetchCoin()) });

Wallet.propTypes = { sendCoin: PropTypes.func.isRequired,
  coins: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
