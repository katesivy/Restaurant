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
        <a className="navbar-brand" href="#"><h1 className="display-4" id="Home">Kate's Kitchen</h1></a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="flex-column flex-sm-row" id="navbarText"> 
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item ">
              <a className="nav-link" href="#Hours">Hours <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Location">Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>
          <a className="navbar-text nav-link bg-dark text-light" href="https://www.doordash.com/en-US/?ignore_splash_experience=true&utm_source=Google&utm_medium=SEMb&utm_campaign=CX_US_SE_SB_GO_ACQ_TETXXX_9256288018_+&utm_term=door%20dash&utm_content=91210142302&kclickid=_k_Cj0KCQjwmpb0BRCBARIsAG7y4zZJkAzGCRpQE_bLIt2lNo6us_nGBLAkKFUB0ZI7cehFwRwN-OsdXaIaAk73EALw_wcB_k_&gclid=Cj0KCQjwmpb0BRCBARIsAG7y4zZJkAzGCRpQE_bLIt2lNo6us_nGBLAkKFUB0ZI7cehFwRwN-OsdXaIaAk73EALw_wcB">
            Order Now
    </a>
        </div>
      </nav>



    );
  }

}

export default Navbar;