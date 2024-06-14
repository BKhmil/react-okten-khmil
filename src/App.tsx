import React, {FC} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, incrementByAmount, reset} from "./redux/slices/slice1";

const App: FC = () => {
    // деструктурую поле value зі стрейту слайсу counter1Slice,
    // який наразі доступний з поля з ім'ям slice1 об'єкту state - глобального стану
    const {value} = useAppSelector(state => state.slice1);

    // дістаю ДИСПАТЧЕРИЗАТОР :)
    const dispatch = useAppDispatch();

    return (
        <>
            <h2>{value}</h2>
            {/*
                далі все просто, через ДИСПАТЧЕРИЗАТОР тригаю потрібні actions
            */}
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>increment by amount</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </>
    );
}

export default App;
