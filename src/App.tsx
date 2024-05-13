import React, {FC, useState} from 'react';
import './App.css';
import {useStorage} from "./hooks/useStorage";
import {usePrevious} from "./hooks/usePrevious";
import {useToggle} from "./hooks/useToggle";

const App: FC = () => {

    // TASK 3 START
    useStorage<number[]>({key: 'array', value: [1, 2, 3, 4, 5]});
    useStorage<{name: string, age: number}[]>({
        key: 'users',
        value: [
            {
                name: 'vasya',
                age: 19
            },
            {
                name: 'sergii',
                age: 30
            }
        ]});
    // TASK 3 END

    // TASK 2 START
    const [state, setState] = useState<number>(5);
    const x = usePrevious<number>(state);

    const inc = () => {
        x.modify(prev => {
            setState(++prev);
            return ++prev;
        });
    };
    // TASK 2 END

    // TASK 1 START
    const [toggleState, toggle] = useToggle(false);

    // TASK 1 END
  return (
    <>
      {/*  TASK 2   */}
        <div>
            <p>Current count: {state}</p>
            <p>Previous count: {x.previous ? x.previous : 'null'}</p>
            <button onClick={inc}>Increment</button>
        </div>
    {/*    TASK 1   */}
        <div>
            <p>{toggleState ? 'Toggle state - true' : 'Toggle state - false'}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    </>
  );
}

export default App;
