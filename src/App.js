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
  const [selectedTitle, setTitle] = useState("");
  const [selectedSize, setSize] = useState("");
  const [selectedPrice, setPrice] = useState("");
  const [selectedImg, setImg] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedProdInfo, size) => {
    console.log("selected prod info" + selectedProdInfo)
    // need to make cart open and add a ShoppingCartItem with the right details
    setTitle(selectedProdInfo.title)
    setSize(size)
    setPrice(selectedProdInfo.price)
    setImg(selectedProdInfo.sku)
    callSetCart()
    // setCart([...cart,
    //           {
    //             title : selectedTitle, 
    //             size : selectedSize,
    //             price : selectedPrice,
    //             img : selectedImg
    //           }
    //         ]);
    console.log(cart)
  }

  const callSetCart = () => {
    setTimeout(() => setCart(cart => [
      ...cart,
        {
        title : selectedTitle, 
        size : selectedSize,
        price : selectedPrice,
        img : selectedImg
      }
    ]), 1000)
    // setTimeout(() => console.log("this is what I chose: " + selectedTitle),
    // 5000)
    console.log("this is what I chose: " + selectedTitle)
    // setTimeout(() => setCart([...cart,
    //   {
    //     title : selectedTitle, 
    //     size : selectedSize,
    //     price : selectedPrice,
    //     img : selectedImg
    //   }
    // ]), 5000)
  }

 
  
  const skus = Object.keys(products);
  const items = skus.map(
    sku => <ProductContainer 
              productInfo={products[sku]}
              handleAddToCart={handleAddToCart.bind(this)}
            />
    );
      return(
        <div style={mainPageStyle}>
          <h1 style={titleStyle}>Sick Tees Co.</h1>
          <button onClick={() => toggleMenu(!menuVisibility)}>shopping cart</button> 
          <div style={cartStyle}>
            <ShoppingCart 
                          cart={cart}
                          visible={menuVisibility}
            />
          </div>
          <div style={productsStyle} class="ui grid">{items}</div>
        </div>
      )
};

export default App;

// cartItemTitle={selectedTitle}
//                           cartItemSize={selectedSize}
//                           cartItemPrice={selectedPrice}
//                           cartItemImg={selectedImg} 