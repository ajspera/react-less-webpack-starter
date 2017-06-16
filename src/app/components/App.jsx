import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Header/Header.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import HomePage from './Pages/HomePage.jsx';

import './app.less';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main-content">
          <Header />


          <Route path="/search" component={SearchPage} />
          <Route exact path="/" component={HomePage} />

        </div>
      </Router>
    )
  }
}
