import React, {FC} from 'react';
import {IPaginatedPageModel} from "../models/IPaginatedPageModel";

interface IProps {
    changePage: (action: string) => void;
    next: IPaginatedPageModel | null;
    prev: IPaginatedPageModel | null;
}
const PaginationComponent: FC<IProps> = ({changePage, prev, next}) => {
    return (
        <div>
            {/*
                    на основі значення prev встановлюю значення для disabled
                    та передаю в onClick колбек який викликає функцію changePage із потрібним аргументом
            */}
            <button
                disabled={!prev}
                onClick={() => changePage('prev')}>prev</button>

            {/*     тут все аналогічно      */}
            <button
                disabled={!next}
                onClick={() => changePage('next')}>next</button>
        </div>
    );
};

export default PaginationComponent;