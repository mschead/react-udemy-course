import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage'
import ContactPage from '../components/ContactPage';
import Portfolio from '../components/Portfolio';
import PortfolioItemPage from '../components/PortfolioItemPage';

// Create 6 new files for the 6 components
// setup imports, components, default export
// import into AppRouter so they can be used

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/portfolio" component={Portfolio} exact={true}/>
        <Route path="/portfolio/:id" component={PortfolioItemPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;