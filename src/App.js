import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
// import Main from './Components/Main';
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
            },
            {
                name: 'Mains',
                number: 50,
                alias: 'mains',
                id: 'mains'
            },
            {
                name: 'Soups & Salads',
                number: 3,
                alias: 'soups',
                id: 'soups'
            },
            {
                name: 'Sides',
                number: 5,
                alias: 'sides',
                id: 'sides'
            },
            {
                name: 'Desserts',
                number: 5,
                alias: 'desserts',
                id: 'desserts'
            }

        ] 
        };
       

    }
    // create clickhandler for each section  onClick={this.props.parentFunction}
    // let newArray = this.props.todoList;

    // if (this.props.view === 'all') {
    //     newArray = this.props.todoList
    // } else if (this.props.view === 'remaining') {
    //     newArray = this.props.todoList.filter(item => item.status === false)
    // } else if (this.props.view === 'completed') {
    //     newArray = this.props.todoList.filter(item => item.status === true)
    // }
    // console.log(newArray)

    

    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
                <NavTabs sections={this.state.sections}/>

                {this.state.sections.map((item, index) =>
                    <Menu key={index} menuType={item.name} menuNumber={item.number} menuAlias={item.alias} />
                )}
                
                <Footer />

            </div>
        );
    }

}

export default App;

