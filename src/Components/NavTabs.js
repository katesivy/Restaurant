import React from "react";

function NavTabs(props) {
    return (
        <>
               <div className="row justify-content-center text-center mx-auto">
                {/* <div className="col-12  text-center mx-auto">
                </div>  */}

                   {props.sections.map((item, index) =>
                  
                   
                        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active border border-dark" href={item.href} id="menu-section" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">
                                    <h4 key={index}  >
                                        {item.name} </h4>
                                </a>
                            </li>
                        </ul>
                      
               
                    )}
             </div>    



            {/* { <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link text-dark" data-toggle="tab" href="#appetizers"><h5>Appetizers</h5></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark " data-toggle="tab" href="#mains"><h5>Mains</h5></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark " data-toggle="tab" href="#soups"><h5>Soups & Salads</h5></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" data-toggle="tab" href="#sides"><h5>Sides</h5></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark" data-toggle="tab" href="#desserts"><h5>Desserts</h5></a>
                </li>
            </ul>
 } */}

        </>

    )
}
export default NavTabs;




