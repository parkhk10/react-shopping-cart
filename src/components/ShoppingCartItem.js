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

function ShoppingCartItem({title, size, price, img, timeStamp, cartDelete, inventory}) {
    const deleteItemWrapper = (timeStamp) => {
        cartDelete.deleteItem(timeStamp);
        inventory.addToInventory(img, size)
    }
        return(
            <div style={wrapperStyle}>
                <div style={prodDetailWrapperStyle}>
                    <img src={"./data/products/" + img + "_1.jpg"} style={iconStyle} class="ui mini image"/> 
                    <div style={textWrapStyle}>
                        <p style={pStyle}>{title}</p>
                        <br/>
                        <p style={pStyle}>{size}  //  <b>${price}</b></p>
                        <br/>
                        <br />
                        {/* <p style={priceStyle}><b>${this.props.cartItemPrice}</b></p> */}
                    </div>
                </div>
                <div style={buttonStyle}>
                    <button class="ui inverted red button" onClick={() => deleteItemWrapper(timeStamp)}>-</button> 
                </div>
            </div>
        )
}

// need to implement a function that adds 1 to the count in inventory when - button is clicked!!!!

export default ShoppingCartItem;