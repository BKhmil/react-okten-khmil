import React, {FC} from 'react';
import CarComponent from "./CarComponent";
import {ICarWithAuth} from "../models/ICarWithAuth";

interface IProps {
    cars: ICarWithAuth[];
}
const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div style={{display: 'flex'}}>
            {
                cars.map((value, index) =>
                    <CarComponent key={index} car={value}/>)
            }
        </div>
    );
};

export default CarsComponent;