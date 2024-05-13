import {useEffect} from "react";


// 3. useStorage - hook that allows a component to store a value in the browser's LocalStorage

interface IUseStorage<T> {
    key: string;
    value: T;
}

// тут навіть логіки немає яку можна описати, просто скорочую кількість коду потрібного для сетання значення в лс
export const useStorage = <T>({key, value}: IUseStorage<T>): void => {
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, []);
};