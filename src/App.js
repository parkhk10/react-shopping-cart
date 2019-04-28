import React from 'react';
import ProductContainer from './components/ProductContainer'

const App = ({products}) => {
  const skus = Object.keys(products);
  const items = skus.map(
    sku => <ProductContainer 
              productImg={products[sku].sku} 
              productTitle={products[sku].title} 
              productPrice={products[sku].price} 
            />
    );

  return(
    <div>
      <h1>Sick Tees Co.</h1>
      <div class="ui grid">{items}</div>
    </div>
    // <ProductContainer productTitle={items} />
  // <ul>{items}</ul>
  )
};

export default App;