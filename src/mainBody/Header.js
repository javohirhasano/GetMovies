import React from 'react'
const mainNav = [
    {
        display: "Home",
        path: "/",
    },
    {
        display: "Catalog",
        path: "/catalog",
    },
    {
        display: "Cart",
        path: "/cart",
    },
    {
        display: "Product",
        path: "/product",
    },
]
import { Button, Icon } from 'semantic-ui-react'
const Header = () => {
    return (
        <div>
            {/* <Button animated>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
            <Button animated='vertical'>
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
            <Button animated='fade'>
                <Button.Content visible>Sign-up for a Pro account</Button.Content>
                <Button.Content hidden>$12.99 a month</Button.Content>
           </Button>*/}
            <div className="header">
                <div className="container">
                    {mainNav.map((item, index) => (
                        <div key={index}>
                            <ul>
                                <li>{item.display}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
