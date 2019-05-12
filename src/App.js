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

  // set states
  const [menuVisibility, toggleMenu] = useState(false); //TODO!!!!!!!
  const [cartItems, setItem] = useState([]);

  const fetchJson= () => {
    // fetch data from local file
    // TODO: In the future, the data would be fetched from Prof.Riesbeck's server
    let json = require('./inventory.json');
    return json;
  }

  const [availableSizes, setInventory] = useState(fetchJson())
  
//   fetch('./data/inventory.json/')
//     .then(resp => resp.json()) 
//     .then(({inventoryFetched}) => {
//       console.log("fetched!")
//       // const [inventory, setInventory] = useState(inventoryFetched)
// });

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
  // const addItem = (x) => {
  //   // var result = cartItems.filter(item => item[0].sku == currSKU && item[1] == currSize) // return any matching (duplicate) items in cart already
  //   //setItem(cartItems.concat([x])) //[[{}, size], [{}, size], [{}, size]]
  //   if (cartItems.length == 0) {
  //     setItem(cartItems.concat([x])) //[[{}, size], [{}, size], [{}, size]]
  //   }
  //   else {
  //     cartItems.map(
  //       anItem => modifyOrAdd(x, anItem)
  //     )
  //   }
  // }

  const changeInventory = (sku, selectedSize) => {
    // takes the sku and size and updates the inventory json file accordingly. 
    // triggered when user clicks on the item button on ProductContainer.js
    const currInStock = availableSizes["inventory"][sku][selectedSize]
    console.log("this is the current in stock: " + currInStock)
    availableSizes["inventory"][sku][selectedSize] = currInStock-1
  }

  const addToInventory = (sku, selectedSize) => {
    // takes the sku and size and updates the inventory json file accordingly. 
    // triggered when user clicks on the delete button from the shopping cart
    const currInStock = availableSizes["inventory"][sku][selectedSize]
    console.log("this is the current in stock: " + currInStock)
    availableSizes["inventory"][sku][selectedSize] = currInStock+1
  }

  const addItem = (x) => {
    setItem(cartItems.concat([x])) //[[{}, size, timestamp], [{}, size, timestamp], [{}, size, timestamp]]
    console.log("here's the item: " + Object.values(x))
  }

  const deleteItem = (timeStamp) => {
    // console.log("made it to delete: " + cart)
    setItem(cartItems.filter(item => item[2] != timeStamp))
    // use filter and use timestamp as a key (get time javascript)
  }

  const skus = Object.keys(products);
  const items = skus.map(
    sku => <ProductContainer 
              productInfo={products[sku]}
              cart={{ cartItems, addItem }}
              inventory={{ availableSizes, changeInventory }}
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
                          cartDelete={{ cartItems, deleteItem }}
                          inventory={{ availableSizes, addToInventory }}
            />
          </div>
          <div style={productsStyle} class="ui grid">{items}</div>
        </div>
      )
};

export default App;