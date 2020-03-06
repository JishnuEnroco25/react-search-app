import React, {Component} from 'react';
import List from '../List';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
      searchResult: '',
    };
  }
  componentDidMount() {
    fetch('data/search-list.json')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  searchSubmit = e => {
    e.preventDefault();
    this.setState({searchResult: this.state.value})
  };
  render() {
    const { data, value, searchResult} = this.state;
    return(
      <div className="SearchInput">
        <form className="search-form" onSubmit={this.searchSubmit}> 
          <div className="field">
            <input type="text" value={value} onChange={this.handleChange} placeholder="Search here" />
          </div>
        </form>
        <div className="result">
        <List
          value={searchResult}
          data={data}
          renderResults={results => (
            <div>
              {results.map(el => (
                <div>
                  <span>{el.name}</span>
                  <span>{el.email}</span>
                </div>
              ))}
            </div>
          )}
        />
        </div>
      </div>
    )
  }
}

export default SearchInput;