import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';


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
                {/* <Main.js />   */}
                {/* <MenuItems /> */}

            </div>
        );
    }

}

export default App;
