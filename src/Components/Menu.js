import React from "react";
const axios = require('axios').default;

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            menuArray: [],
            price: [],
            number: '',
            title: '',
            description: ''

        };
        this.getItems = this.getItems.bind(this);
    }




    // fetchMenu(number) {
    //     for (let i = 0; i < number; i++) {
    //         this.getItems()
    //     }
    // }

    // async componentDidMount() {
    //     console.log('component mounted')
    //     if (window.localStorage != []) {
    //         let storage = JSON.parse(localStorage.getItem('localMenuItems'))
    //         await this.setState({
    //             menuArray: storage
    //         });
    //     } else {
    //         this.getItems(this.props.number)
    //     }
    // }


    // set local storage
    componentDidUpdate() {
        window.localStorage.setItem('localMenuItems', JSON.stringify(this.state.menuArray));

    }

    async getItems(number) {
        let result = await axios.get("https://entree-f18.herokuapp.com/v1/menu/" + number)
            .then(function (response) {
                console.log('response')
                let array = response.data.menu_items;
                console.log(array);
                return array;
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                console.log('finally')
            });
        console.log(result);
        await this.setState({ menuArray: result });
    }


    // map over array and return <> for each 
    // *get items on page
    // pass/set props for each component
    // set local storage after each component is finished with its api calls
    // use a spinner on each component while it renders axios


    // function Map() {
    // let menuItems = this.state.menuArray.map((item) => {

    //     return item;
    // });
    // return menuItems;
    // }
    render() {

        const menuItems = this.state.menuArray.map((item, index) => {
            return <div key={index}>
                <div className="card text-center">
                    <div className="card-header">
                        <div className="card-body">
                            {/* <h2 className="card-title ">Mains</h2> */}
                            <p className="card-text">{item.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        });
        if (this.state.menuArray.length === 0) {
            return null;
        } else {
            return menuItems;
        };














        // 



        {/* <div className="card text-center">
                    <div className="card-header">
                        <div className="card-body">
                            <h2 className="card-title">Appetizers</h2>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                        </div>
                    </div>
                </div>
                <div className="row offset-2">
                    <div className="col-sm-5 ">
                        <div className="card">
                            <div className="card-body">
                                {/* <h5 className="card-title">Menu Item</h5> */}

        {/* <p className="card-text"><a></a></p>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="card ">
                            <div className="card-body">
                                {/* <h5 className="card-title">Menu Item</h5> */}












    }

}

export default Menu;
