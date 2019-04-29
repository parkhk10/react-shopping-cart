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
    marginLeft: '1em'
}

const buttonStyle = {
    float: 'right',
    marginRight: '1em'
}

class ShoppingCartItem extends React.Component {
    render() {
        return(
            <div>
                <div style={prodDetailWrapperStyle}>
                    <img src="./data/products/12064273040195392_2.jpg" style={iconStyle} class="ui mini image"/> 
                    <div style={textWrapStyle}>
                        <p style={pStyle}>Name of shirt</p>
                        <br/>
                        <p style={pStyle}>Quantity: 2 x $20</p>
                        <br/>
                        <p style={priceStyle}><b>$40</b></p>
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