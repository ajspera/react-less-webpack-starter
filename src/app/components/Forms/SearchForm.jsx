import React from 'react';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log(this)
    try {
      alert(this.state.value);
    } catch(e) {
      console.log(e)
    }
    e.preventDefault();
    return false;
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
