import React from "react";
import MenuItem from './MenuItem';
const axios = require('axios').default;

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            menuArray: [],
        };
    }

    fetchMenuItems(number) {
        for (let i = 0; i < number; i++) {
            this.getItems()
        }
    }


    // use local storage to populate menu
    async componentDidMount() {
        if (window.localStorage.length === 0) {
            this.getItems(this.props.number)
        } else {
            console.log('local storage working')
            console.log(this.menuArray)
            let storage = JSON.parse(localStorage.getItem('localMenuItems'))
            await this.setState({
                menuArray: storage
            });
        }
    }

    // set local storage
    componentDidUpdate() {
        window.localStorage.setItem('localMenuItems', JSON.stringify(this.state.menuArray));

    }

    // api call to populate menu array
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

    render() {

        const menuItems = this.state.menuArray.map((item, index) => {
            return <MenuItem key={index} description={item.description} />
        });
        if (this.state.menuArray.length === 0) {
            return null;
        } else {
            return (
                <>
                   <h4 className="card-title text-center p-3">{this.props.menuType}</h4> 
                    {menuItems}
                </>
            )
        };
    }

}

export default Menu;






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


