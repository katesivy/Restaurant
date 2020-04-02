import React from "react";
//  import Map from "./Map";
// import Circle from "./Circle";

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }


    render() {
        return (

            <>
                <div className="row">
                    <div className="col-4 text-center offset-1 m-3 p-3">
                        {/* <div className="card-header">
                            <div className="card-body"> */}
                        {/* <Map /> */}
                        {/* <Circle /> */}
                        <h5 className="card-title" id="Location">Location</h5>
                        <p className="card-text">
                            348 E Main St<br></br>
                            Lexington, KY 40502</p>
                        <a href="#" className="btn btn-primary" id="Contact">Map</a>
                    </div>
                    <div className="col-4 offset-1 text-center m-3 p-3">
                        <h5 className="card-title" id="Location">Hours</h5>
                        <p className="card-text">
                            Monday - Thursday 11:00 a.m. -- 10:00 p.m.<br></br>
                            Friday - Sunday 11:00 a.m. -- 11:00 p.m.</p>
                        <br></br>

                    </div>
                </div>



            </>


        );
    }

}

export default Footer;