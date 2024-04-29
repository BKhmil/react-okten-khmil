import React, {FC} from "react";
import {IAnyPropsWithChildren} from "../../types/anyPropsWithChildren";

export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand?: string,
    category?: string,
    thumbnail?: string,
    images?: string[]
}

const Product: FC<IAnyPropsWithChildren<IProductProps>> = ({
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock
    }) => {

    return (
        <div>
            <div>{id} - {title}</div>
            <p>{description}</p>
            <div>Old price: {price} - New price: {Math.round((price * discountPercentage) / 100)} - Rating: {rating}</div>
            <div>{stock}</div>
        </div>
    );
};

export default Product;