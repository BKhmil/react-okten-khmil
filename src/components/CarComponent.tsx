import React, {FC} from 'react';
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    car: ICarWithAuth;
}

const CarComponent: FC<IProps> = ({car}) => {
    return (
        <div style={{width: 'fit-content', border: 'solid red 2px', margin: '5px'}}>
            <div>id: {car.id}</div>
            <div>brand: {car.brand}</div>
            <div>year: {car.year}</div>
            <div>price: {car.price}</div>
        </div>
    );
};

export default CarComponent;