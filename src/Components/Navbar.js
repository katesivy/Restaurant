import React from "react";


  class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><h1 className="display-4">Kate's Kitchen</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Location</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
    <span className="navbar-text bg-dark text-light">
      Order Now
    </span>
  </div>
</nav>



        );
    }
  
  }
  
  export default Navbar;