// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const ADD_EXPENSE = 'ADD_EXPENSE';

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const DELETE_EXPENSE = 'DELETE_EXPENSE';
