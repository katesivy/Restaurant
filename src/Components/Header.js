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
        {/* <div className="jumbotron jumbotron-fluid">
          <div className="container">
          <img src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"></img>
            <h1 className="display-4">Fresh, Fun Food</h1>
            <p className="lead"><span>the best food ever</span></p>
          </div>
        </div>  */}
         <div className="card bg-dark text-white ">
   <img src="https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" className="card-img" id="pic1" alt="pic"></img> 
  <div className="card-img-overlay">
    <h1 className="card-title display-4 text-center">Bistro</h1>
    <h5 className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h5>
  </div>
</div> 

      </>

    );
  }

}

export default Header;