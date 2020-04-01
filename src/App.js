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
            // price: ''
        };
        this.sections = [
            {
                name: 'Appetizers',
                price: ' $8',
                number: 5,
                alias: 'appetizers'
            },
        {
                name: 'Mains',
                price: ' $15',
                number: 15,
                alias: 'mains'
            },
        {
                name: 'Soups & Salads',
                price: ' $9',
                number: 3,
                alias: 'soups'
            },
         {
                name: 'Sides',
                price: ' $5',
                number: 5,
                alias: 'sides'
            },
        {
                name: 'Desserts',
                price: ' $6',
                number: 5,
                alias: 'desserts'
            }

        ]

    }


    // create clickhandler for each section

    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
               

                {this.sections.map((item, index) =>
                    <Menu key={index} menuType={item.name} menuPrice={item.price} menuNumber={item.number} menuAlias={item.alias}/>
                )}
              
         


                {/* <Footer /> */}

            </div>
        );
    }

}

export default App;

