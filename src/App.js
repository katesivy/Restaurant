import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
// import Main from './Components/Main';
import Menu from './Components/Menu';

// import Footer from './Components/Footer';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            price: '$10'
        };
        this.sections = ['Appetizers', 'Mains', 'Soups & Salads', 'Sides', 'Desserts']
    }      
// clickhandler for each section


    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
               {/*add props*/}

               {this.sections.map((item) =>
                    <Menu  menuType={item}/>
                )}

               
                {/* <Footer /> */}

            </div>
        );
    }

}

export default App;

// { 'Appetizers': '$10.00'}
// { 'Mains': '$15.00', 
// { 'Sides': '$10.00', 
//  'Soups & Salads': '$10.00', 
//  'Desserts': '$5.00'}]
// 