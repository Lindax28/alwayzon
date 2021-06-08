import React from 'react';
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <main>
      <div className="splash-page">
        <img className="hero-image" src={window.splash} alt="splash page background" />
      </div>
      <section className="cards">
        <Link className="card" onClick={() => this.props.fetchProducts('', 'Beauty and Skincare')} to="products?search=&category=Beauty%20and%20Skincare">
          <h2>Beauty and Skincare</h2>
          <img src={window.beautyandskincare} alt="Beauty and Skincare" />
        </Link>
        <Link className="card" onClick={() => this.props.fetchProducts('', 'Books and Movies')} to="products?search=&category=Books%20and%20Movies">
          <h2>Books and Movies</h2>
          <img src={window.booksandmovies} alt="Books and Movies" />
        </Link>
        <Link className="card" onClick={() => this.props.fetchProducts('', 'Electronics')} to="products?search=&category=Electronics">
          <h2>Electronics</h2>
          <img src={window.electronics} alt="Electronics" />
        </Link>
      </section>
    </main>
  )
  }
}

export default Splash;