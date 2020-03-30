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
       
         <div className="card bg-dark text-white ">
   <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80" className="card-img" id="pic1" alt="pic"></img> 
  <div className="card-img-overlay">
    <h1 className="card-title display-4 text-center  text-light ">"Best Food, Ever"</h1>
    <h5 className="card-text text-center  text-dark font-weight-bold">-Gov. Andy Beshear</h5>
  </div>
</div> 

      </>

    );
  }

}

export default Header;