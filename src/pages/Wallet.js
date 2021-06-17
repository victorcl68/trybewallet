import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin } from '../actions';
// import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  constructor() {
    super();

    this.totalExpenses = this.totalExpenses.bind(this);
  }

  componentDidMount() {
    const { sendCoin } = this.props;
    sendCoin();
  }

  totalExpenses() {
    const { expenses } = this.props;
    const ONE = 1;
    const ZERO = 0;
    // I made it because o f the "magic numbers"

    if (expenses.length >= ONE) {
      const total = expenses.reduce((acc, { value, currency, exchangeRates }) => {
        const findCurrentCurrency = Object
          .values(exchangeRates).find(({ code }) => currency === code);
        const sencondPartValue = parseFloat(findCurrentCurrency.ask) * parseFloat(value);
        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
        return acc + sencondPartValue;
      }, 0);
      return total;
      // For the logic of reduce above I was inspired by André de Bem's project
      // https://github.com/tryber/sd-010-b-project-trybewallet/pull/71
    }
    return ZERO;
  }

  render() {
    const { userEmail } = this.props;
    return (
      <>
        <header>
          <h1 data-testid="email-field">
            Email:
            { userEmail }
          </h1>
          <h2 data-testid="total-field">
            Total:
            { this.totalExpenses() }
          </h2>
          <h3 data-testid="header-currency-field">
            BRL
          </h3>
        </header>
        {/* Insert Component Header after */}
        <Form />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({ sendCoin: () => dispatch(fetchCoin()) });

Wallet.propTypes = {
  sendCoin: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
