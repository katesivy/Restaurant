import React from "react";


  class Header extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    return (

      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
      </>

    );
  }

}

export default Header;