import React from 'react';
import ProductContainer from './components/ProductContainer'

const mainPageStyle = {
  textAlign: 'center'
}

const titleStyle = {
  marginBottom: '2em',
  marginTop: '1em'
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
      <div class="ui grid">{items}</div>
    </div>
    // <ProductContainer productTitle={items} />
  // <ul>{items}</ul>
  )
};

export default App;