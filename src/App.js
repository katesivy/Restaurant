import React from 'react';
import './App.css';
import Header from './Components/Header';
// import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Menu from './Components/Menu';
import Sides from './Components/Sides';
// import Footer from './Components/Footer';


class App extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }


    render() {
        return (
            <div className="App">
                {/* <Navbar /> */}
                <Header />
                <Main />  
                <Menu />
                <Sides />
                {/* <Footer /> */}

            </div>
        );
    }

}

export default App;
