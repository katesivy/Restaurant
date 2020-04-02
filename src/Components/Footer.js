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
                <div className="row d-flex">
                    <div className="col-3 col-sm-12 text-center offset-1 offset-sm-0 m-3 p-3">
                        {/* <div className="card-header">
                            <div className="card-body"> */}
                        {/* <Map /> */}
                        {/* <Circle /> */}
                        <h5 className="card-title" id="Location">Location</h5>
                        <p className="card-text">
                            348 E Main St<br></br>
                            Lexington, KY 40502</p>
                        {/* <a href="#" className="btn btn-primary" >Map</a> */}
                    </div>
                    <div className="col-4 col-sm-12 offset-1 offset-sm-0 text-center m-3 p-3">
                        <h5 className="card-title" id="Hours">Hours</h5>
                        <p className="card-text">
                            Monday - Thursday 11:00 a.m. -- 10:00 p.m.<br></br>
                            Friday - Sunday 11:00 a.m. -- 11:00 p.m.</p>
                        <br></br>

                    </div>
                    <div className="col-lg-3 col-sm-12 offset-1 text-center m-3 p-3">
                        <h5 className="card-title" id="Contact">Contact Info</h5>
                        <p className="card-text">
                            Phone: 859-323-0101<br></br>
                            Email: kateskitchen@gmail.com</p>
                        <br></br>

                    </div>
                </div>



            </>


        );
    }

}

export default Footer;