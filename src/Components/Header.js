import React from "react";


function Header() {
    return (

      <>
        <div className="card bg-dark text-white  text-wrap" >
          <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80" className="card-img" id="pic1" alt="pic"></img>
          <div className="card-img-overlay y-bottom text-wrap" >
              <h1 className="card-text display-2 text-lg-center text-sm-right text-wrap  ">"Best. Food. Ever."</h1>
              <h5 className="card-text text-lg-center text-sm-right font-weight-bold text-wrap">–Gov. Andy Beshear</h5>
          </div>
        </div>

      </>

    );
  }

export default Header;