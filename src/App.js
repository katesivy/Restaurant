import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import NavTabs from './Components/NavTabs';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
           sections: [
            {
                name: 'Appetizers',
                number: 5,
                alias: 'appetizers',
                id: 'appetizers',
                href: '#appetizers'
            },
            {
                name: 'Mains',
                number: 50,
                alias: 'mains',
                id: 'mains',
                href: '#mains'
            },
            {
                name: 'Soups & Salads',
                number: 3,
                alias: 'soups',
                id: 'soups',
                href: '#soups'
            },
            {
                name: 'Sides',
                number: 5,
                alias: 'sides',
                id: 'sides',
                href: '#sides'
            },
            {
                name: 'Desserts',
                number: 5,
                alias: 'desserts',
                id: 'desserts',
                href: '#desserts'
            }
        ] 
        };
    }
    
    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
                <NavTabs sections={this.state.sections}/>

                {this.state.sections.map((item, index) =>
                    <Menu key={index} menuType={item.name} menuNumber={item.number} menuAlias={item.alias} id={item.id}/>
                )}
                
                <Footer />

            </div>
        );
    }

}

export default App;

