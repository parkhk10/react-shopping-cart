import React from 'react';
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
  const skus = Object.keys(products);
  const items = skus.map(
    sku => <ProductContainer 
              productImg={products[sku].sku} 
              productTitle={products[sku].title} 
              productDesc={products[sku].description}
              productPrice={products[sku].price} 
              productSizes={products[sku].availableSizes}
            />
    );

  return(
    <div style={mainPageStyle}>
      <h1 style={titleStyle}>Sick Tees Co.</h1>
      <div style={cartStyle}><ShoppingCart /></div>
      <div style={productsStyle} class="ui grid">{items}</div>
    </div>
    // <ProductContainer productTitle={items} />
  // <ul>{items}</ul>
  )
};

export default App;