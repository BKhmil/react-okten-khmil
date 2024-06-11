import React, {FC} from 'react';
import {IPaginatedPageModel} from "../models/IPaginatedPageModel";
import {useSearchParams} from "react-router-dom";

interface IProps {
    // звісно що тут тепер прибрав поле для функції
    next: IPaginatedPageModel | null;
    prev: IPaginatedPageModel | null;
}

// пропс для функції також прибрав
const PaginationComponent: FC<IProps> = ({prev, next}) => {
    // зрозуміло що тепер і в цій компоненті треба викликати цей хук
    // щоб мати змогу оновлювати парамси
    const [query, setQuery] = useSearchParams();

    // ------------ ДЗ-10, ПЕРЕНІС ЦЮ ФУНКЦІЮ СЮДИ З CarsPage.tsx
    // бо навіщо мені її передавати, якщо можна щоб одразу була тут,
    // а ререндеринг відбувається завдяки тому що searchParams одні на весь додаток, тобто це не працює так як стейт
    // завдяки цьому у мене useEffect із CarsPage.tsx, який слідкує за значенням query для searchParams
    // буде знати коли я тут оновлюю значення query, аісля цього робитиме новйи запит,
    // оновить стейт на основі отриманих даних, і вуаля, рередеринг
    //
    // функція яка відповідає за пагінацію
    // аргументом приймає action в залежності від якого спрацьовує відповідний кейс у світчі
    const changePage = (action: string) => {
        switch(action) {
            case 'prev':
                // якщо попередня сторінка потрібна, то оновлюю query
                // передаю туди новий об'єкт з оновленим полем prev

                // ------- ДЗ-10
                // оскільки тут приходять одразу поля, то тепер відразу їх можна спредити
                setQuery({...prev});
                break;
            case 'next':
                // тут аналогічно
                setQuery({...next});
                break;
        }
    }

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