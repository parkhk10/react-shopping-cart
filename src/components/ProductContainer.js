import React from 'react';

const container = {
    textAlign: 'center',
};

function ProductContainer({ productInfo, cart, inventory }) {

    const addSizeToProdObject = (prodObject, size) => {
        console.log("this is the selected product:" + Object.values(prodObject))
        var newProdObject = prodObject
        newProdObject.size = size
        console.log("this is the selected product after size:" + Object.values(prodObject))
        return(newProdObject)
    }

    const addItemWrapper = (productInfo, size) => {
        var timeStamp = Date.now()
        cart.addItem([productInfo, size, timeStamp])
        inventory.changeInventory(productInfo.sku, size)
    }

    const buttonCreator = (itemInventory, size) => {
        if (itemInventory[size] != 0) {
            return(
                <div class="ui right labeled button">
                    <button class="ui icon button" 
                            tabindex="0"
                            onClick={() => addItemWrapper(productInfo, size)}>
                        {size}
                    </button>
                    <a class="ui left pointing basic label">{itemInventory[size]}</a>
                </div>
            )
        }
    }

    const createSizeButtons = () => {
        const quantity = 1
        const itemInventory = inventory.availableSizes["inventory"][productInfo.sku]
        return(
            Object.keys(itemInventory).map((size, i) =>  buttonCreator(itemInventory, size) 
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