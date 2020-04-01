import React from "react";

function MenuItem(props) {
    return (
    <div className="card text-center">
        <div className="card-header">
            <div className="card-body">
                
                <p className="card-text">{props.description + " $10.99"}</p>

            </div>
        </div>
    </div>
    )
}

export default MenuItem;