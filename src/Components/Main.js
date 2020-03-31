import React from "react";
// import $ from "jquery";


class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }
// set up axios fetch--then/catch/finally
// const axios = require('axios').default;
// axios.get({params: ID: userid})
// .then(function(response){console.log(response)})
// .catch(function(error){console.log(error)})
// .finally(function(){})

// set up DidMount function to set local storage

// set up array for menuItems
// map((menuItems) => up to 5/8/12 times
// set up additional array for 3 more menuItems in section15

// set up array for prices

    render() {
        return (

            <>

                <div className="row text-center">
                <div className="col-12 text-center">
                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="menu-section" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                            <h2 className="text center">Appetizers</h2></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="menu-section" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                            <h2 className="text center text-dark">Mains</h2></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="menu-section" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">
                            <h2 className="text center text-dark">Sides</h2></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="menu-section" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">
                            <h2 className="text center text-dark">Soups & Salads</h2></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="menu-section" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">
                            <h2 className="text center text-dark">Desserts</h2></a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                        <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                        <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
                        <div className="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
                    </div>
                     </div>
                      </div>


                     
   {/* function Nav() {
    {`$('#myTab li:last-child a').tab('show')`}
  }) 
 <script><Nav /></script>    */}
               

                
                  

               
            </>


        );
    }

}

export default Main;
