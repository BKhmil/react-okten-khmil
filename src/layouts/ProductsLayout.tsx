import React, {FC, useEffect, useState} from "react";
import getData from "../utils/getData";
import Product, {IProductProps} from "../components/product/Product";
import styles from './ProductsLayout.module.css';

// оскільки масив з продуктами це лише поле об'єкту який приходить нам з dummyjson
// я зробив окремий інтерфейс для цього об'єкту
interface IResponse {
    products: IProductProps[],
    total: number,
    skip: number,
    limit: number
}

// в цьому компоненті вже присутня магія Хогвартсу
const ProductsLayout: FC = ()=> {
    // тут у мене виник затуп, бо я ж віддаю із функції getData() як і об'єкт, так і стрінгу з помилкою, а стейт зробив тільки для першого
    // і через це на мене ругалось все що тільки можна + я не міг доступитись до поля products у data
    const [products, setProducts] = useState<IProductProps[]>([]);

    // тому тут окремий стейт для помилки
    const [err, setErr] = useState<string>('');

    useEffect(() => {
        // тут також відбувся затуп, хоча я й пам'ятав що асинхронна функція повертає проміс
        // я хвилин 10 не міг додуматися поставити then після її виклику
        getData<IResponse>('https://dummyjson.com/products').then(data => {
            // тут звичайна перевірка на вихідний тип
            if (typeof data === 'string') {
                setErr(data);
            } else {
                setProducts(data.products);

                // оце місце затупу №3, бо без цього якщо у нас після того як відпрацювала помилка, а потім зникла
                // то поле з нею залишалося відображатися якщо не засетаєш знову пусту стрінгу
                setErr('');
            }
        });
    }, []);

    return (
        <div className={styles.container}>
            {
                // люблю тернарки
                // тут в залежності від стану err виводимо те що потрібно
                err ? err : products.map((product, index) => (
                        <Product
                            key={index}
                            id={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            discountPercentage={product.discountPercentage}
                            rating={product.rating}
                            stock={product.stock}
                            brand={product.brand}
                            category={product.category}
                            thumbnail={product.thumbnail}
                            images={product.images}
                    />))
            }
        </div>
    );
};

export default ProductsLayout;