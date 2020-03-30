import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import MenuItems from './Components/MenuItems';
import Footer from './Components/Footer';


class App extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }


    render() {
        return (
            <div className="App">
                <Navbar />
                <Header />
                <Main />  
                <MenuItems />
                <Footer />

            </div>
        );
    }

}

export default App;
