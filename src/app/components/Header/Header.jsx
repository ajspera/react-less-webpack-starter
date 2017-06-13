import React from 'react';
import './header.less';

export default class Header extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div className="logo">Logo</div>
        <div className="header-menu">
          <button>open menu</button>
        </div>
      </div>
    )
  }
}