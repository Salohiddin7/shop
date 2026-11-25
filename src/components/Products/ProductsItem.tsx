import { type FC } from 'react'
import img from '/public/images/productImg.png'
import { cart, starIcon } from "../../utils/img"
import type { IProduct } from "../../types"


interface IProductsItemProps {
    product: IProduct
}

const ProductsItem:FC<IProductsItemProps> = ({ product }) => {
  return (
    <>
        <div className="products__item">
            <img src={product.image} alt="" className="products__item-img" />
            <p className="products__item-price">
                {product.price}
                <span>$</span>
            </p>
            <button className="products__item-cart">
                <img src={cart} alt="" />
            </button>
            <div className="products__item-info">
                <span className="products__item-rating">
                    {product.rating}
                    <img src={starIcon} alt="" />
                </span>
                <h2 className="products__item-title">{product.title}</h2>
                <p className="products__item-text">{product.description}</p>
            </div>
        </div>
    </>
  )
}

export default ProductsItem