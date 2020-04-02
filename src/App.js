import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
// import Main from './Components/Main';
import Menu from './Components/Menu';
import Footer from './Components/Footer';



class App extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.sections = [
            {
                name: 'Appetizers',
                number: 5,
                alias: 'appetizers'
            },
        {
                name: 'Mains',
                number: 15,
                alias: 'mains'
            },
        {
                name: 'Soups & Salads',
                number: 3,
                alias: 'soups'
            },
         {
                name: 'Sides',
                number: 5,
                alias: 'sides'
            },
        {
                name: 'Desserts',
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
                    <Menu key={index} menuType={item.name} menuNumber={item.number} menuAlias={item.alias}/>
                )}
              
         


                <Footer />

            </div>
        );
    }

}

export default App;

