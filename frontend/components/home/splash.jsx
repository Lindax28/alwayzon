import React from 'react';
import { Link } from 'react-router-dom';

// Render cards for each category. Upon click, show products filtered by those category parameters
const Splash = props => {
    return(
    <div className="splash-page">
      <div className="hero-banner">
        <img className="hero-image" src={window.splash} alt="splash page background" />
      </div>
      <section className="cards">
        <Link className="card" onClick={() => props.fetchProducts('', 'Beauty and Skincare')} to="/products?search=&category=Beauty%20and%20Skincare">
          <h2>Beauty and Skincare</h2>
          <img src={window.beautyandskincare} alt="Beauty and Skincare" />
        </Link>
        <Link className="card" onClick={() => props.fetchProducts('', 'Books and Movies')} to="/products?search=&category=Books%20and%20Movies">
          <h2>Books and Movies</h2>
          <img src={window.booksandmovies} alt="Books and Movies" />
        </Link>
        <Link className="card" onClick={() => props.fetchProducts('', 'Electronics')} to="/products?search=&category=Electronics">
          <h2>Electronics</h2>
          <img src={window.electronics} alt="Electronics" />
        </Link>
        <Link className="card" onClick={() => props.fetchProducts('', 'Fashion and Jewelry')} to="/products?search=&category=Fashion%20and%20Jewelry">
          <h2>Fashion and Jewelry</h2>
          <img src={window.fashionandjewelry} alt="Fashion and Jewelry" />
        </Link>
        <Link className="card" onClick={() => props.fetchProducts('', 'Games and Toys')} to="/products?search=&category=Games%20and%20Toys">
          <h2>Games and Toys</h2>
          <img src={window.gamesandtoys} alt="Games and Toys" />
        </Link>
        <Link className="card" onClick={() => props.fetchProducts('', 'Home and Kitchen')} to="/products?search=&category=Home%20and%20Kitchen">
          <h2>Home and Kitchen</h2>
          <img src={window.homeandkitchen} alt="Home and Kitchen" />
        </Link>
        <Link className="card" onClick={() => props.fetchProducts('', 'School and Office')} to="/products?search=&category=School%20and%20Office">
          <h2>School and Office</h2>
          <img src={window.schoolandoffice} alt="Electronics" />
        </Link>
        <Link className="card" onClick={() => props.fetchProducts('', 'Sports and Outdoors')} to="/products?search=&category=Sports%20and%20Outdoors">
          <h2>Sports and Outdoors</h2>
          <img src={window.sportsandoutdoors} alt="Sports and Outdoors" />
        </Link>
        {/* <a className="back-to-top" href="#">Back to top</a> */}
      </section>
    </div>
  )
}

export default Splash;