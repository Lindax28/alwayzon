import React from 'react';
import { Link } from 'react-router-dom';

// Upon click, show products filtered by those category parameters
const CategoryNavbar = props => {
  return(
    <div className="category-navbar">
      <Link onClick={() => props.fetchProducts('', 'Beauty and Skincare')} to="/products?search=&category=Beauty%20and%20Skincare">
        <h2>Beauty and Skincare</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Books and Movies')} to="/products?search=&category=Books%20and%20Movies">
        <h2>Books and Movies</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Electronics')} to="/products?search=&category=Electronics">
        <h2>Electronics</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Fashion and Jewelry')} to="/products?search=&category=Fashion%20and%20Jewelry">
        <h2>Fashion and Jewelry</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Games and Toys')} to="/products?search=&category=Games%20and%20Toys">
        <h2>Games and Toys</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Home and Kitchen')} to="/products?search=&category=Home%20and%20Kitchen">
        <h2>Home and Kitchen</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'School and Office')} to="/products?search=&category=School%20and%20Office">
        <h2>School and Office</h2>
      </Link>
      <Link onClick={() => props.fetchProducts('', 'Sports and Outdoors')} to="/products?search=&category=Sports%20and%20Outdoors">
        <h2>Sports and Outdoors</h2>
      </Link>
    </div>
  )
};

export default CategoryNavbar;