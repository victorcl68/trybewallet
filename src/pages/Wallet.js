import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <main>
        <h3 data-testid="email-field">
          Email:
          { emailUser }
        </h3>
        <h3 data-testid="total-field"> 0 </h3>
        <h3 data-testid="header-currency-field"> BRL </h3>
      </main>
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
