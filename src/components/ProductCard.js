import React, { Component } from "react";

class ProductCard extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { img, title, price, handleAddToCart } = this.props;

    return (
      <div className="col mb-4 d-flex flex-column product__card">
        <img className="product__img" src={img} alt="" />
        <div className="d-block">
          <h3 className="h5">{title}</h3>
          <p>{price}€</p>
          <button className="btn btn-dark" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
