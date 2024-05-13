// 1. useToggle - custom React hook that allows a component to toggle a value between true and false

import {useState} from "react";

// хук приймає значення ініціалізації і повертає стейт, та функцію, яка його тогглить
// по суті як і з useStorage, в більшій мірі хук просто зменшує кількість коду для виконання дії
// але цей раз взагалі зменшує незначну кількість
export const useToggle = (initState: boolean): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(initState);

    return [state, () => setState(!state)];
};