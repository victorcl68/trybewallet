import React from 'react';
import PropTypes from 'prop-types';

class Selects extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <>
        <label htmlFor="method">
          Método de pagamento:
          <select
            id="method"
            name="method"
            onChange={ (event) => handleChange(event) }
          >
            <option key="Dinheiro">Dinheiro</option>
            <option key="Cartão de crédito">Cartão de crédito</option>
            <option key="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" name="tag" onChange={ (event) => handleChange(event) }>
            <option key="Alimentação">Alimentação</option>
            <option key="Lazer">Lazer</option>
            <option key="Trabalho">Trabalho</option>
            <option key="Transporte">Transporte</option>
            <option key="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

Selects.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Selects;
