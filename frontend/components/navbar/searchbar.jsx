import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { GoTriangleDown } from 'react-icons/go';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''}

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({search: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search;
    this.props.fetchProducts(search);
    this.props.history.push(`/products?search=${this.state.search}`);
  }

  render() {
    return(
        <form className="searchbar" onSubmit={this.handleSubmit}>
          <button type="button" className="search-menu">All<GoTriangleDown fill="gray" className="dropdown-arrow"/></button>
          <input className="search-input" type="text" value={this.state.search} onChange={this.handleInput} />
          <button type="submit" className="search-button"><AiOutlineSearch fill="#555555" /></button>
        </form>
    )
  }
}

export default Searchbar;