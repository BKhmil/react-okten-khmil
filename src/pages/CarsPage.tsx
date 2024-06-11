import React, {useEffect, useState} from 'react';
import {carService} from "../services/auth.service";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import CarsComponent from "../components/CarsComponent";
import PaginationComponent from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {
    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items: [],
        next: null,
        prev: null,
        total_items: 0,
        total_pages: 0
    });

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        carService.getCars(query.get('page') || '1').then(value => {
            if (value) setCarsPaginatedObject(value);
        });
    }, [query]);

    const changePage = (action: string) => {
        switch(action) {
            case 'prev':
                setQuery({...carsPaginatedObject.prev});
                break;
            case 'next':
                setQuery({...carsPaginatedObject.next});
                break;
        }
    }

    return (
        <div>
            <PaginationComponent changePage={changePage} next={carsPaginatedObject.next} prev={carsPaginatedObject.prev} />
            <CarsComponent cars={carsPaginatedObject.items}/>
        </div>
    );
};

export default CarsPage;