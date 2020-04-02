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
        if (window.localStorage.length === 0) {
            this.getItems(this.props.menuNumber)
        } else {
            console.log('local storage')
            let storage = JSON.parse(localStorage.getItem(this.props.menuAlias))
            await this.setState({
                menuArray: storage
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

        // if result # === props #
        // else getItems for # - result, append remaining
        // if (result === menuNumber) {
        await this.setState
            ({ menuArray: result });
        // } else {
        //     let difference = MenuNumber - result;
        //     let differenceArray = axios.get("https://entree-f18.herokuapp.com/v1/menu/" + difference);
        //     // console.log(differenceArray)
        //     return differenceArray;

        // }

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
                    <h4 className="card-title text-center p-3">
                        {this.props.menuType}

                    </h4>
                    {menuItems}

                </>
            )
        };
    }

}

export default Menu;


