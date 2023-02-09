import React, { Component } from 'react';

class Checkout extends Component {

  componentDidMount() {
    console.log("Mounted!")
    let updatedPrice = document.getElementsByClassName('price');
    Paddle.Environment.set('sandbox');
    Paddle.Setup({
      vendor: 9943,
      eventCallback: function(data) {
        updatedPrice[0].innerText = data.eventData.checkout.prices.customer.total;
      }
    });

    Paddle.Checkout.open({
      product: 42490,
      email: "j.meeuwen+react-spa-test@paddle.com",
      country: "GB",
      postcode: "E3",
      method: "inline",
      frameTarget: 'checkout-container',
      frameInitialHeight: 416,
      frameStyle: 'width:100%; min-width:500px; background-color: transparent; border: none;'
    });
  }

  render() {
    return (
      <div className='checkout-spread'>
        <h1>Checkout</h1>
        <div className="checkout-container"></div>
        <p>This price should change with a coupon: <span className="price">...</span></p>
        <a href="/">Go Back</a>
      </div>
    );
  }
}

export default Checkout;
