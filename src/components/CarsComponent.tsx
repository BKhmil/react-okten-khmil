import React, {FC} from 'react';
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import CarComponent from "./CarComponent";

interface IProps {
    carsPaginatedModel: ICarPaginatedModel | null;
}
const CarsComponent: FC<IProps> = ({carsPaginatedModel}) => {
    return (
        <div>
            {carsPaginatedModel
                &&
                carsPaginatedModel.items.map((value, index) =>
                    <CarComponent key={index} car={value}/>)}
        </div>
    );
};

export default CarsComponent;