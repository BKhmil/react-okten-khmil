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
            <button
                disabled={!prev}
                onClick={() => changePage('prev')}>prev</button>
            <button
                disabled={!next}
                onClick={() => changePage('next')}>next</button>
        </div>
    );
};

export default PaginationComponent;