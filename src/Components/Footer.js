 import React from "react";

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }


    render() {
        return (

            <>
             <div className=" text-center">
                        {/* <div className="card-header">
                            <div className="card-body"> */}
                                <h5 className="card-title" id="Location">Location</h5>
                                <p className="card-text">
                                348 E Main St</p>
                                <p>Lexington, KY 40502</p>
                                <a href="#" className="btn btn-primary" id="Contact">Map</a>
                            {/* </div>
                        </div> */}
                    </div>


               
            </>


        );
    }

}

export default Footer;