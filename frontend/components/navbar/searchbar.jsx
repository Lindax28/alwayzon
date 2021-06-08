import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      category: ''
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => this.setState({[type]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search;
    const category = this.state.category;
    this.props.fetchProducts(search, category);
    this.props.history.push(`/products?search=${this.state.search}&category=${this.state.category}`);
  }

  render() {
    return(
        <form className="searchbar" onSubmit={this.handleSubmit}>
            <select className="search-menu category" id="category" onChange={this.handleInput("category")}>
              <option value="">All</option>
              <option value="Beauty and Skincare">Beauty and Skincare</option>
              <option value="Books and Movies">Books and Movies</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion and Jewelry">Fashion and Jewelry</option>
              <option value="Games and Toys">Games and Toys</option>
              <option value="Home and Kitchen">Home and Kitchen</option>
              <option value="School and Office">School and Office</option>
              <option value="Sports and Outdoors">Sports and Outdoors</option>
            </select>
          <input className="search-input" type="text" value={this.state.search} onChange={this.handleInput("search")} />
          <button type="submit" className="search-button"><AiOutlineSearch fill="#555555" /></button>
        </form>
    )
  }
}

export default Searchbar;