import React from 'react';

import SearchForm from '../Forms/SearchForm.jsx';

export default class SearchPage extends React.Component {
  render() {
    var query = {
      subreddit: ''
    };
    return (
      <div>
        <h1>Search Page</h1>
        <SearchForm query={query} />
      </div>
    )
  }
}
