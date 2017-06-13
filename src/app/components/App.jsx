import React from 'react';

import Header from './Header/Header.jsx';

import './app.less';

export default class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Header />
        <h1>Wudup</h1>
      </div>
    )
  }
}