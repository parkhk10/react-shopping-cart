import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'

const iconStyle = {
    display: 'inline-block'
}; // to make the shopping cart icon next to the text

const pStyle = {
    display: 'inline-block',
    marginLeft: '1em',
    marginBottom: '0px'
}

const menuBarStyle = {
    width: '25em'
}
// ui right fixed vertical menu

// class ShoppingCart extends React.Component {
//     render() {
//         return(
//             <div style={menuBarStyle} class="ui sidebar right fixed vertical menu"> 
//                 <div class="item">
//                     <img style={iconStyle} class="ui mini image" src="./data/img/shopping_cart.png" />
//                     <p style={pStyle}>Shopping Cart: 0 items</p>
//                 </div>
//                 {/* this is the part that needs to be mapped */}
//                 <div class="item">
//                     <ShoppingCartItem />
//                 </div>
//                 <div class="item">
//                     <h3>Total: $20</h3>
//                 </div>
//             </div>
//         )
//     }
// }

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
        // this.cartItems = this.props.cart.map(
        //     item => <ShoppingCartItem cartItemTitle={item.title}
        //                             cartItemSize={item.size}
        //                             cartItemPrice={item.price}
        //                             cartItemImg={item.img} 
        //             />
        //     );
        this.cartItems = <p>HI!!!!!</p>
      };

    render() {
        return(
            <Sidebar
                style={menuBarStyle}
                visible= {this.props.visible}
                as={Menu}
                animation='overlay'
                direction='right'
                icon='labeled'
                inverted
                vertical
                width='thin'
            >
                <div class="item">
                     <img style={iconStyle} class="ui mini image" src="./data/img/shopping_cart.png" />
                     <p style={pStyle}>Shopping Cart: 0 items</p>
                 </div>
                 {/* this is the part that needs to be mapped */}
                 <div>{this.cartItems}</div>
                 {/* <div class="item">
                     <ShoppingCartItem cartItemTitle={this.props.cartItemTitle}
                                        cartItemSize={this.props.cartItemSize}
                                        cartItemPrice={this.props.cartItemPrice}
                                        cartItemImg={this.props.cartItemImg} 
                      />
                 </div> */}
                 <div class="item">
                     <h3>Total: $20</h3>
                 </div>
            </Sidebar>
        )
    }
}

export default ShoppingCart;