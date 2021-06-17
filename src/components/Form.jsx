import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCoin, addingExpense } from '../actions';
import Selects from './Selects';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendExpenses = this.sendExpenses.bind(this);
    this.theCurrencies = this.theCurrencies.bind(this);
  }

  componentDidMount() {
    const { fetchCoinState } = this.props;
    fetchCoinState();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  UDSTDeleted(USDTCurrency) {
    const withoutUSDT = [...USDTCurrency];
    withoutUSDT.splice(1, 1);
    return withoutUSDT;
  }

  theCurrencies() {
    const { currencies } = this.props;
    const array = Object.values(JSON.parse(currencies));
    const noUSTD = this.UDSTDeleted(array);
    return noUSTD.map(({ code }) => (
      <option key={ code } value={ code }>{ code }</option>));
  }

  async sendExpenses() {
    const { expenses, fetchCoinState, addingExpenseState } = this.props;
    const nextOne = () => (expenses.length);

    await fetchCoinState();
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const newExpense = {
      id: nextOne(),
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: JSON.parse(currencies),
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    };
    addingExpenseState(newExpense);
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            id="value"
            name="value"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            onChange={ (event) => this.handleChange(event) }
          >
            { this.theCurrencies() }
          </select>
        </label>
        <Selects handleChange={ this.handleChange } />
        <button type="button" onClick={ () => this.sendExpenses() }>
          Adicionar despesas
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  currencies: JSON.stringify(state.wallet.currencies),
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/Stringify
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinState: () => dispatch(fetchCoin()),
  addingExpenseState: (expense) => dispatch(addingExpense(expense)),
});

Form.propTypes = {
  fetchCoinState: PropTypes.func.isRequired,
  addingExpenseState: PropTypes.func.isRequired,
  currencies: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
