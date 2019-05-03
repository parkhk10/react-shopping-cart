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

  const modifyOrAdd = (x, anItem) => {
    var currSKU = x[0].sku
    var currSize = x[1]
    if (anItem[0].sku == currSKU && anItem[1] == currSize) {
      console.log("found duplicate")
      anItem[2] = anItem[2] + 1 // just increment if a match is found
    }
    else {
      console.log("concating")
      setItem(cartItems.concat([x])) //[[{}, size], [{}, size], [{}, size]]
    }
  }
  const addItem = (x) => {
    // var result = cartItems.filter(item => item[0].sku == currSKU && item[1] == currSize) // return any matching (duplicate) items in cart already
    //setItem(cartItems.concat([x])) //[[{}, size], [{}, size], [{}, size]]
    if (cartItems.length == 0) {
      setItem(cartItems.concat([x])) //[[{}, size], [{}, size], [{}, size]]
    }
    else {
      cartItems.map(
        anItem => modifyOrAdd(x, anItem)
      )
    }
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