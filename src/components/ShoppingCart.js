import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { Icon, Menu, Sidebar, ItemMeta } from 'semantic-ui-react'

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

function ShoppingCartFunc(props) {
    // const itemObjectArray = Object.values(props.cart)
    const cartItems = props.cart.map(
        item => <ShoppingCartItem cartItemTitle={item[0].title}
                    cartItemSize={item[1]}
                    cartItemPrice={item[0].price}
                    cartItemImg={item[0].sku} 
                />
        );

        if(props.cart.length == 0) {
            return(
                <Sidebar
                    style={menuBarStyle}
                    visible= {props.visible}
                    as={Menu}
                    animation='overlay'
                    direction='right'
                    icon='labeled'
                    // inverted
                    vertical
                    width='thin'
                >
                    <div class="item">
                         <img style={iconStyle} class="ui mini image" src="./data/img/shopping_cart.png" />
                         <p style={pStyle}>Shopping Cart: 0 items</p>
                     </div>
                     {/* this is the part that needs to be mapped */}
                     {/* <div>{this.cartItemsRender}</div> */}
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
        else {
            return(
                <Sidebar
                    style={menuBarStyle}
                    visible= {props.visible}
                    as={Menu}
                    animation='overlay'
                    direction='right'
                    icon='labeled'
                    // inverted
                    vertical
                    width='thin'
                >
                    <div class="item">
                         <img style={iconStyle} class="ui mini image" src="./data/img/shopping_cart.png" />
                         <p style={pStyle}>Shopping Cart: 0 items</p>
                     </div>
                     {/* this is the part that needs to be mapped */}
                     <div class="item">{cartItems}</div>
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

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)
        console.log("this is the cart:" + this.props.cart)
        // this.sample = [{img: 51498472915966370,
        //     price: 29.45,
        //     size: "M",
        //     title: "Dark Thug Blue-Navy T-Shirt"}, 
        //     {img: 10686354557628304,
        //         price: 9,
        //         size: "X",
        //         title: "Sphynx Tie Dye Wine T-Shirt"}]
                //props.cart

        if(this.props.cart.length != 0) {

        console.log("rendering cart items")
        }
      };

    cartItems = Object.keys(this.props.cart).map(item => <ShoppingCartItem cartItemTitle={item.title}
          cartItemSize={item.size}
          cartItemPrice={item.price}
          cartItemImg={item.img} 
          />)

    
    componentWillReceiveProps(props) {
    const { cart, visible } = this.props;

    }


    render() {
        if(this.props.cart.length == 0) {
            return(
                <Sidebar
                    style={menuBarStyle}
                    visible= {this.props.visible}
                    as={Menu}
                    animation='overlay'
                    direction='right'
                    icon='labeled'
                    // inverted
                    vertical
                    width='thin'
                >
                    <div class="item">
                         <img style={iconStyle} class="ui mini image" src="./data/img/shopping_cart.png" />
                         <p style={pStyle}>Shopping Cart: 0 items</p>
                     </div>
                     {/* this is the part that needs to be mapped */}
                     {/* <div>{this.cartItemsRender}</div> */}
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
        else {
            return(
                <Sidebar
                    style={menuBarStyle}
                    visible= {this.props.visible}
                    as={Menu}
                    animation='overlay'
                    direction='right'
                    icon='labeled'
                    // inverted
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
    }

export default ShoppingCartFunc;