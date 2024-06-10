import React, {useEffect, useState} from 'react';
import {carService} from "../services/auth.service";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import CarsComponent from "../components/CarsComponent";

const CarsPage = () => {
    const [carsPaginatedModel, setCars] = useState<ICarPaginatedModel | null>(null);

    useEffect(() => {
        carService.getCars().then(value => {
            if (value) setCars(value);
        });
    }, []);

    return (
        <div>
            <CarsComponent carsPaginatedModel={carsPaginatedModel}/>
        </div>
    );
};

export default CarsPage;