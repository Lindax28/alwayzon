import React from 'react';


class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <main className="splash-page">
      <img className="hero-image" src={window.splash} alt="splash page background" />
    </main>
  )
  }
}

export default Splash;