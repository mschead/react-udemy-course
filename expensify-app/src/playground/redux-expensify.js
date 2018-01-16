import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'sdgdsgdf2325',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};