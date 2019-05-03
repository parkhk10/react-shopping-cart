import React from 'react';

const iconStyle = {
    display: 'inline-block',
    marginRight: '1em'
}; // to make the shopping cart icon next to the text

const textWrapStyle = {
    display: 'inline-block',
}

const pStyle = {
    marginBottom: '0px',
    float: 'left'
}

const priceStyle = {
    marginBottom: '0px',
    float: 'left',
}

const prodDetailWrapperStyle = {
    float: 'left',
    marginLeft: '0em'
}

const buttonStyle = {
    float: 'right',
    marginRight: '1em'
}

const wrapperStyle = {
    height: '62px'
}

class ShoppingCartItem extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <div style={wrapperStyle}>
                <div style={prodDetailWrapperStyle}>
                    <img src={"./data/products/" + this.props.cartItemImg + "_1.jpg"} style={iconStyle} class="ui mini image"/> 
                    <div style={textWrapStyle}>
                        <p style={pStyle}>{this.props.cartItemTitle}</p>
                        <br/>
                        <p style={pStyle}>{this.props.cartItemSize}  //  <b>${this.props.cartItemPrice}</b></p>
                        <br/>
                        <br />
                        {/* <p style={priceStyle}><b>${this.props.cartItemPrice}</b></p> */}
                    </div>
                </div>
                <div style={buttonStyle}>
                    <button class="ui inverted red button">-</button>
                </div>
            </div>
        )
    }
}

export default ShoppingCartItem;