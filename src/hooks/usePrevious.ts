// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import {useRef} from "react";

// довго думав як можна зробити, хотів через useEffect якось, але не пішло
export const usePrevious = <T>(variable: T): {current: T, previous: T | null, modify: (callback: (current: T) => T) => void} => {
    // два окремих рефа для поточного стану і попереднього
    const currentVar = useRef<T>(variable);
    const previousVar = useRef<T | null>(null);

    // через те що я не додумався як через useEffect зробити, мені треба було якось контролювати зміну значення
    // тому я зробив по суті той самий useRef, але з доступом до попереднього значення
    // та методом для маніпуляції поточним значенням
    // завдяки цьому я і маю змогу сетати кожен раз попереднє значення, при оновленні поточного

    // ну а далі все просто, modify приймає колбек,
    // який в свою чергу приймає поточне значення і повертає значення такого ж типу
    const modify = (callback: (current: T) => T) => {

        // сеттінг значень
        previousVar.current = currentVar.current;
        currentVar.current = callback(currentVar.current);
    };

    return { current: currentVar.current, previous: previousVar.current, modify };
};