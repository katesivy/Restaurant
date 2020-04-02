import React from "react";

function NavTabs(props) {
    return (
    <div className="row ">
        <div className="col-12 text-center">
            <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="menu-section" data-toggle="tab"  role="tab" aria-controls="home" aria-selected="true">

                        {props.sections.map((item, index) =>
                            <h2 key={index} href="{item.id}" > 
                                {item.name} </h2>

                        )}
                        </a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default NavTabs;




