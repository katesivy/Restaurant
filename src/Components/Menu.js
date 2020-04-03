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

    // use local storage to populate menu
    async componentDidMount() {
        let storage = localStorage.getItem(this.props.menuAlias)
        if (storage === null) {
            await this.getItems(this.props.menuNumber)
            if (this.props.menuNumber > 12) {
                await this.getItems(this.props.menuNumber - 12);
            }
        } else {
            console.log('local storage')
            await this.setState({
                menuArray: JSON.parse(storage)
            });
        }
    }

    // set local storage
    componentDidUpdate() {
        window.localStorage.setItem(this.props.menuAlias, JSON.stringify(this.state.menuArray));
    }

    // api call to populate menu array
    async getItems(menuNumber) {
        let result = await axios.get("https://entree-f18.herokuapp.com/v1/menu/" + menuNumber)
            .then(function (response) {
                console.log('response')
                let array = response.data.menu_items.map((item) => {
                    let price = Math.floor((Math.random() * 20) + 1);
                    item.price = price;
                    return item;
                });
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

        let tempArray = this.state.menuArray;
        for (let i = 0; i < result.length; i++) {
            tempArray.push(result[i]);
        }

        await this.setState
            ({ menuArray: tempArray });
    }


    render() {

        const menuItems = this.state.menuArray.map((item, index) => {
            return <>
                <MenuItem key={index} description={item.description} price={` $${item.price}`} />
            </>
        });
        if (this.state.menuArray.length === 0) {
            return null;
        } else {
            return (
                <>
                    <h4 className="card-title text-center p-3" id={this.props.id}>
                        {this.props.menuType}
                    </h4>
                    {menuItems}
                </>
            )
        };
    }

}

export default Menu;


