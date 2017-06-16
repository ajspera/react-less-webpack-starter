import React from 'react';

import {
  Link
} from 'react-router-dom';

import './header.less';

export default class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div className="logo">Logo</div>
        <div className="header-menu">
          <Link to="/">Home</Link> <Link to="/search">Search</Link>
        </div>
      </div>
    )
  }
}
