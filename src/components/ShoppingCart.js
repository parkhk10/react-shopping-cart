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

function ShoppingCartFunc({cart, visible, cartDelete, inventory}) {
    // const itemObjectArray = Object.values(props.cart)
    const cartItems = cart.map( // pass down the index so we can pick out which one to delete
        (item) => <ShoppingCartItem title={item[0].title}
                    size={item[1]}
                    price={item[0].price}
                    img={item[0].sku}
                    timeStamp={item[2]}
                    cartDelete={cartDelete} 
                    inventory={inventory}
                    // quantity={}
                />
        );
    var totalCost = 0;
    for(var i = 0; i < cart.length; i++) {
        totalCost = totalCost + cart[i][0].price
    }
    console.log("total cost:" + totalCost)
    // const calcTotalCost = props.cart.map(
    //     item => { totalCost = totalCost + item[0].price }
    // )
            return(
                <Sidebar
                    style={menuBarStyle}
                    visible= {visible}
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
                         <p style={pStyle}>Shopping Cart: {cart.length} items</p>
                     </div>
                     {/* this is the part that needs to be mapped */}
                     <div class="item">{cartItems}</div>
                     <div class="item">
                         <h3>Total: ${totalCost}</h3>
                     </div>
                </Sidebar>
            )
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