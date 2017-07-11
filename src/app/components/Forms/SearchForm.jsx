import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let obj = this.props.query;
    obj[e.target.name] = e.target.value;
    this.props.onChange(obj);
  }
  render() {

    var query = this.props.query;
    console.log(this.props)

    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Subreddit:
            <input type="text" value={query.subreddit} name="subreddit" onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}
