import React from "react";

function MenuItem(props) {
    return (
        <div className="card text-center" id="Home"  >
            <div className="card-header" id="Location" >
                <div className="card-body" id="Contact">

                    <p className="card-text">
                        {props.description}
                        {props.price}
                        </p>

                </div>
            </div>
        </div>
    )
}



export default MenuItem;