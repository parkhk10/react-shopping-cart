import React from 'react';

const container = {
    textAlign: 'center',
};

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
      }

    render() {
        return(
            <div style={container}>
                <img src={"./data/products/" + this.props.productImg + "_1.jpg"} />
                <h3>{this.props.productTitle}</h3>
                <p>${this.props.productPrice}</p>
                <button class="ui secondary button">Add to Cart</button>
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