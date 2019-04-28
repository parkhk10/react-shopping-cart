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
            this.props.productSizes.map(size => <button class="ui inverted violet button">{size}</button>)
        )
    }

    render() {
        return(
            <div style={container}>
                <img src={"./data/products/" + this.props.productImg + "_1.jpg"} />
                <h3>{this.props.productTitle}</h3>
                <p>{this.props.productDesc}</p>
                <p>${this.props.productPrice}</p>
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