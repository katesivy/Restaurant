import React from "react";
// import Pictures from "./Components/Pictures";
// import smoothies.jpg from '.Components/smoothies.jpg';


class Main extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }


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
  }) */}
  {/* <script><Nav /></script>   */}
               

                
                  

               
            </>


        );
    }

}

export default Main;

// https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80

// https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80