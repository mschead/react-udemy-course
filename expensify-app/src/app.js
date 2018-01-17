import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisiblesExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill'}));
store.dispatch(addExpense({ description: 'Gas bill'}));
store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisiblesExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));