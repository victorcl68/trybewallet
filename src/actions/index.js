export const SUB = 'SUBMIT';

export const actionLogin = (email) => ({
  type: SUB,
  payload: {
    email,
  },
});

export const savingCurrencies = (currencies) => ({
  type: 'SAVE',
  payload: {
    currencies,
  },
});

export function fetchCoin() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencie) => {
        dispatch(savingCurrencies(currencie));
      });
  };
}

export const addingExpense = (expense) => ({
  type: 'ADD',
  payload: {
    expense,
  },
});
