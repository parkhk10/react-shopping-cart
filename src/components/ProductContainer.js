import React from 'react';

const container = {
    textAlign: 'center',
};

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
      };

    createSizeButtons = () => {
        return(
            this.props.productInfo.availableSizes.map(size => <button class="ui inverted violet button" 
                                                        onClick={() => this.props.handleAddToCart(this.props.productInfo, size)}>{size}
                                                </button>
            )
        )
    }

    render() {
        return(
            <div style={container}>
                <img src={"./data/products/" + this.props.productInfo.sku + "_1.jpg"} />
                <h3>{this.props.productInfo.title}</h3>
                <p>{this.props.productInfo.description}</p>
                <p>${this.props.productInfo.price}</p>
                <div>{this.createSizeButtons()}</div>
                {/* <button class="ui inverted teal button">Add to Cart</button> */}
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default ProductContainer;