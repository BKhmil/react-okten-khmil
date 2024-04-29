import React, {FC, useEffect, useState} from "react";
import getData from "../utils/getData";
import Product, {IProductProps} from "../components/product/Product";

interface IResponse {
    products: IProductProps[],
    total: number,
    skip: number,
    limit: number
}

const ProductsLayout: FC = ()=> {
    const [products, setProducts] = useState<IProductProps[]>([]);
    const [err, setErr] = useState<string>('');

    useEffect(() => {
        getData<IResponse>('https://dummyjson.com/products').then(data => {
            if (typeof data === 'string') {
                setErr(data);
            } else {
                setProducts(data.products);
            }
        });
    }, []);

    return (
        <div>
            {err}
            {
                products.map((product, index) => (
                    <Product
                        key={index}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        discountPercentage={product.discountPercentage}
                        rating={product.rating}
                        stock={product.stock}
                    />))
            }
        </div>
    );
};

export default ProductsLayout;