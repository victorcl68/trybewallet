export const ATT_EMAIL = 'ATT_EMAIL';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

export const emailData = (state) => ({
  type: ATT_EMAIL,
  state,
});

export const receivedCurrencies = (currencies) => ({
  type: RECEIVE_CURRENCIES,
  currencies,
});

export function fetchCoin() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencie) => {
        delete currencie.USDT;
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
        dispatch(receivedCurrencies(currencie));
      });
  };
}
