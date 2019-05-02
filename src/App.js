import React, { useState, useEffect } from 'react';
import ProductContainer from './components/ProductContainer'
import ShoppingCart from './components/ShoppingCart'

const mainPageStyle = {
  textAlign: 'center'
}

const titleStyle = {
  marginBottom: '2em',
  marginTop: '1em'
}

const cartStyle = {
  float: 'right',
  marginLeft: '0px',
}

const productsStyle ={
  float: 'left',
  marginRight: '0px'
}

const App = ({products}) => {

  const [menuVisibility, toggleMenu] = useState(false); //TODO!!!!!!!
  const [cartItems, setItem] = useState([]);

  const addItem = (x) => {
    // console.log("trying to add: " + Object.keys(x))
    setItem(cartItems.concat([x])) //[[{}, size], [{}, size], [{}, size]]
  }
  
  const skus = Object.keys(products);
  const items = skus.map(
    sku => <ProductContainer 
              productInfo={products[sku]}
              cart={{ cartItems, addItem }}
            />
    );
      return(
        <div style={mainPageStyle}>
          <h1 style={titleStyle}>Sick Tees Co.</h1>
          <button onClick={() => toggleMenu(!menuVisibility)}>shopping cart</button> 
          <div style={cartStyle}>
            <ShoppingCart 
                          cart={cartItems}
                          visible={menuVisibility}
            />
          </div>
          <div style={productsStyle} class="ui grid">{items}</div>
        </div>
      )
};

export default App;