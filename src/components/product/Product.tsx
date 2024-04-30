import React, {FC} from "react";
import {IAnyPropsWithChildren} from "../../types/anyPropsWithChildren";
import styles from './Product.module.css';

// базова модель для нашого продукту
export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

// цей компонент у мене тупий, просто наповнює розмітку інфою яка приходить зверху
const Product: FC<IAnyPropsWithChildren<IProductProps>> = ({
        id,
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        thumbnail,
        images
    }) => {

    return (
        <div className={styles.product}>
            <div className={styles.field}>{id} - {title}</div>
            <p className={styles.field}>{description}</p>
            <div className={styles.field}>Old price: {price}$ - New price: {price - (Math.round((price * discountPercentage) / 100))}$ - Rating: {rating}★</div>
            <div className={styles.field}>Stock: {stock}</div>
            <div className={styles.field}>Brand: {brand}</div>
            <div className={styles.field}>Category: {category}</div>
            <p className={styles.field}>Thumbnail: {thumbnail}</p>
            <div className={styles.imagesWrapper}>
                {images.map((image, index) => <img key={index} className={styles.productImg} src={image} alt={title}/>)}
            </div>
        </div>
    );
};

export default Product;