import React, {useEffect, useState} from 'react';
import {carService} from "../services/auth.service";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import CarsComponent from "../components/CarsComponent";
import PaginationComponent from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";

// сторінка яка відображає компонент який реалізує пагінацію та компонент з машинами
const CarsPage = () => {
    // стейт для об'єкту з детальною інфою про машини, яка приходить з апішки
    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    });

    // використання useSearchParams, по дефолту впроваджую парметр page зі значенням 1
    // тобто по дефолту стоїть перша сторіфнка
    const [query, setQuery] = useSearchParams({page: '1'});

    // useEffect який отримує об'єкт з інфою про машини
    useEffect(() => {
        // метод який все це робить
        // приймає аргументом значення параметру page, якщо там null(відповідно до апі таке можливо)
        // то по дефолту буде передаватись значення яке відповідає сторінці 1
        carService.getCars(query.get('page') || '1').then(value => {
            // якщо об'єкт прийшов - записую його в стейт
            if (value) setCarsPaginatedObject(value);
        });

        // в депсах слідкую за змінами в параметрах урли
    }, [query]);

    // функція яка відповідає за пагінацію
    // аргументом приймає action в залежності від якого спрацьовує відповідний кейс у світчі
    const changePage = (action: string) => {
        switch(action) {
            case 'prev':
                // якщо попередня сторінка потрібна, то оновлюю query
                // передаю туди новий об'єкт з оновленим полем prev
                setQuery({...carsPaginatedObject.prev});
                break;
            case 'next':
                // тут аналогічно
                setQuery({...carsPaginatedObject.next});
                break;
        }
    }

    return (
        <div>
            {/*
                    передаю компоненті яка відповідає за пагінацію функцію, яка виконує пагінацію
                    та значення полів next і prev, для контролю властивості disabled у кнопках
            */}
            <PaginationComponent changePage={changePage} next={carsPaginatedObject.next} prev={carsPaginatedObject.prev} />

            {/*
                    передаю компоненті яка відповідає за мишини масив самих машин. який лежить у полі items
                    об'єкту carsPaginatedObject
             */}
            <CarsComponent cars={carsPaginatedObject.items}/>
        </div>
    );
};

export default CarsPage;