import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { emailUser } = this.props;
    return (
      <header>
        <h3 data-testid="email-field">
          Email:
          { emailUser }
        </h3>
        <h3 data-testid="total-field"> 0 </h3>
        <h3 data-testid="header-currency-field"> BRL </h3>
      </header>
    );
  }
}

Header.propTypes = { emailUser: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ emailUser: state.user.email });

export default connect(mapStateToProps)(Header);
