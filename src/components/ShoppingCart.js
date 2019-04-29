import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { List, Segment } from 'semantic-ui-react'

const iconStyle = {
    display: 'inline-block'
}; // to make the shopping cart icon next to the text

const pStyle = {
    display: 'inline-block',
    marginLeft: '1em',
    marginBottom: '0px'
}

const menuBarStyle = {
    width: '20em'
}

class ShoppingCart extends React.Component {
    render() {
        return(
            <div style={menuBarStyle} class="ui right fixed vertical menu">
                <div class="item">
                    <img style={iconStyle} class="ui mini image" src="./data/img/shopping_cart.png" />
                    <p style={pStyle}>Shopping Cart: 0 items</p>
                </div>
                {/* this is the part that needs to be mapped */}
                <div class="item">
                    <ShoppingCartItem />
                </div>
                <div class="item">
                    <h3>Total: $20</h3>
                </div>
            </div>
        )
    }
}

// const ShoppingCart = () => (
    
// //   <Segment inverted>
// //     <List divided inverted relaxed>
// //       <List.Item>
// //         <List.Content>
// //           <List.Header>Snickerdoodle</List.Header>
// //           An excellent companion
// //         </List.Content>
// //       </List.Item>
// //       <List.Item>
// //         <List.Content>
// //           <List.Header>Poodle</List.Header>
// //           A poodle, its pretty basic
// //         </List.Content>
// //       </List.Item>
// //       <List.Item>
// //         <List.Content>
// //           <List.Header>Paulo</List.Header>
// //           He's also a dog
// //         </List.Content>
// //       </List.Item>
// //     </List>
// //   </Segment>
// )

export default ShoppingCart;