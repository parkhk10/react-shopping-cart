import React from 'react';

const container = {
    textAlign: 'center',
};

function ProductContainer({ productInfo, cart }) {

    const addSizeToProdObject = (prodObject, size) => {
        console.log("this is the selected product:" + Object.values(prodObject))
        var newProdObject = prodObject
        newProdObject.size = size
        console.log("this is the selected product after size:" + Object.values(prodObject))
        return(newProdObject)
    }

    const createSizeButtons = () => {
        const quantity = 1
        return(
            productInfo.availableSizes.map(size => <button class="ui inverted violet button" 
                                                        onClick={() => cart.addItem([productInfo, size, quantity])}>{size}
                                                </button>
            )
        )
    }
    return(
        <div style={container}>
            <img src={"./data/products/" + productInfo.sku + "_1.jpg"} />
            <h3>{productInfo.title}</h3>
            <p>{productInfo.description}</p>
            <p>${productInfo.price}</p>
            <div>{createSizeButtons()}</div>
            {/* <button class="ui inverted teal button">Add to Cart</button> */}
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
// class ProductContainer extends React.Component {
//     constructor(props) {
//         super(props)
//       };

//     createSizeButtons = () => {
//         return(
//             this.props.productInfo.availableSizes.map(size => <button class="ui inverted violet button" 
//                                                         onClick={() => this.props.handleAddToCart(this.props.productInfo, size)}>{size}
//                                                 </button>
//             )
//         )
//     }

//     render() {
//         return(
//             <div style={container}>
//                 <img src={"./data/products/" + this.props.productInfo.sku + "_1.jpg"} />
//                 <h3>{this.props.productInfo.title}</h3>
//                 <p>{this.props.productInfo.description}</p>
//                 <p>${this.props.productInfo.price}</p>
//                 <div>{this.createSizeButtons()}</div>
//                 {/* <button class="ui inverted teal button">Add to Cart</button> */}
//                 <br />
//                 <br />
//                 <br />
//                 <br />
//                 <br />
//             </div>
//         )
//     }
// }

export default ProductContainer;